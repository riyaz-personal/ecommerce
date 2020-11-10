/**
|--------------------------------------------------
| Import React core components
|--------------------------------------------------
*/
import React, { Component } from "react";
import { connect } from "react-redux";

/**
|--------------------------------------------------
| Import action file to store data
|--------------------------------------------------
*/
import { storePaymode, storeOrderNumber } from "../../../Actions/orderProcess";

/**
|--------------------------------------------------
| Import Api helper files
|--------------------------------------------------
*/
import { apiDomain, orderCheckoutMethod } from "../../../Api/helper";
import { postApi } from "../../../Api";

/**
|--------------------------------------------------
| Import path to be use for redirection dynamically
|--------------------------------------------------
*/
import WebPath from "../../../Routes/WebPath";

/**
|--------------------------------------------------
| Redirection helper component
|--------------------------------------------------
*/
import { history } from "../../../Routes/history";

/**
|--------------------------------------------------
| Rendering Class components
|--------------------------------------------------
*/

class PaymentMethod extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storePaymentMode: "cod",
    };
  }

  // Reset selected Address - back from payment page
  static getDerivedStateFromProps(props, state) {
    const { storePaymentMode } = state;
    const {
      state: { selectedPayment },
    } = props;
    if (selectedPayment && selectedPayment !== storePaymentMode) {
      return {
        storePaymentMode: selectedPayment,
      };
    }
    return null;
  }

  storePayment = (mode) => {
    const { storePaymode } = this.props;
    storePaymode(mode);
    this.setState({ storePaymentMode: mode });
  };

  completeStep = async () => {
    const { storePaymentMode } = this.state;
    const { storeOrderNumber } = this.props;
    localStorage.removeItem("selectedList");
    // Api hit - complete order
    const requestUrl = apiDomain + orderCheckoutMethod;
    const customer_id = localStorage.getItem("customer_id");
    const store_id = localStorage.getItem("storeId");
    const order_id = localStorage.getItem("order_id");
    const inputData = {
      mod: "ORDER_ADDRESS",
      data_arr: {
        store_id,
        customer_id,
        order_id,
        order_source: "APP",
        payment_mode: storePaymentMode
      },
    };
      const { data } = await postApi(requestUrl, inputData);
      const sampleResponse = { "status": "200", "status_message": "Success", "data":{ "success":{ "order_id": "640", "invoice_no": "99907180640", "message": "Order Has Been Placeed SuccessFully" }}}
      if (data && data.data && data.data.success) {
        const orderNumber = data.data.success.invoice_no;
        storeOrderNumber(orderNumber);
      } else {
        const orderNumber = sampleResponse.data.success.invoice_no;
        storeOrderNumber(orderNumber);
        // alert(error);
      }
    history.push(WebPath.OrderThanks);
  };

  render() {
    const { storePaymentMode } = this.state;
    const { payingMethod } = this.props;

    if (payingMethod && payingMethod.length === 0) {
      return <></>;
    }
    return (
      <div id="payementDivContent">
        <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
          <ul style={{ display: "inline", paddingInlineStart: "0" }}>
            {payingMethod.map((item, index) => {
              return (
                <li
                  style={{
                    listStyle: "none",
                    display: "inline",
                    textAlign: "center",
                  }}
                  onClick={() => this.storePayment(item.mode)}
                  key={index}
                >
                  <label
                    // id="labelPayment_COD"
                    // name="labelPayment"
                    style={{
                      background: "#eeeeee",
                      color: "#555555",
                      margin: "0.5rem",
                      fontSize: "0.9rem",
                      padding: "0.5rem",
                      backgroundColor:
                        storePaymentMode === item.mode ? "#ff9800" : false,
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={item.modeImage}
                      style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        height: "6rem",
                        width: "34%",
                      }}
                      alt={item.modeAlt}
                    />
                  </label>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="row" onClick={() => this.completeStep()}>
          <div className="col-12 btn btn-success" style={{ textAlign: "center", margin: "0rem", bottom:" 6.5%", position: "fixed", width: "100%" }}>
            <span style={{ textAlign: "center", fontSize: "1.2rem" }}>
              Complete
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  state: state.orderReducer,
});
const mapDispatch = {
  storePaymode,
  storeOrderNumber,
};
export default connect(mapState, mapDispatch)(PaymentMethod);
