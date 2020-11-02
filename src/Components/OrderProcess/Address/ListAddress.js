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
import {
  currentOrderProcess,
  selectedAddress,
} from "../../../Actions/orderProcess";

/**
|--------------------------------------------------
| Import Api helper files
|--------------------------------------------------
*/
import { imagePath } from "../../../Api/helper";
// import { postApi } from "../../Api";

/**
|--------------------------------------------------
| Get public root path folder 
|--------------------------------------------------
*/
const { PUBLIC_URL } = process.env;

/**
|--------------------------------------------------
| Rendering Class components
|--------------------------------------------------
*/

class ListAddress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storeAddress: {},
      showErrMsg: false,
    };
  }

  // Reset selected Address - back from payment page
  static getDerivedStateFromProps(props, state) {
    const { storeAddress } = state;
    const {
      state: { selectedAddress },
    } = props;
    if (
      selectedAddress &&
      selectedAddress.addressId &&
      storeAddress &&
      !storeAddress.addressId
    ) {
      return {
        storeAddress: selectedAddress,
      };
    }
    return null;
  }

  setProcessPopup = (popup) => {
    const { currentOrderProcess } = this.props;
    currentOrderProcess(popup);
  };

  handleClick = (data) => {
    const { selectedAddress } = this.props;
    selectedAddress(data);
    this.setState({ storeAddress: data, showErrMsg: false });
  };

  nextStep = () => {
    const { storeAddress } = this.state;
    const { currentOrderProcess } = this.props;
    const showErrMsg = storeAddress && storeAddress.addressId ? false : true;
    if (!showErrMsg) currentOrderProcess("openPayment");
    this.setState({ showErrMsg });
  };

  render() {
    const { storeAddress, showErrMsg } = this.state;
    const { storeListAddress } = this.props;
    // const storeListAddress = [];
    return (
      <>
      <section  style={{paddingTop: "0rem", paddingBottom: "1rem"}} className="bg-section-secondary">
      <div className="container" style={{paddingRight: "0", paddingLeft: "0", marginLeft: "0", marginRight: "0"}}>
      <div id="addressListDivContent">
        <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
          {storeListAddress && storeListAddress.length === 0 && (
            <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
              <div className="row">
                <div className="col-sm-12" style={{ textAlign: "center"}}>
                  <img
                    src={`${PUBLIC_URL}${imagePath}/Ic-Property.png`}
                    alt={"ICHome"}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12" style={{ textAlign: "center" }}>
                  <h6>Please Add the Address for Order delivery </h6>
                </div>
              </div>
            </div>
          )}
          {storeListAddress &&
            storeListAddress.length > 0 &&
            storeListAddress.map((item, index) => {
              return (
                <div className="row" key={index}>
                  <div className="col-sm-12">
                    <label
                      id={`labelAddress${index}`}
                      name="labelAddress"
                      style={{
                        width: "100%",
                        color: "#55555",
                        margin: "0.5em",
                        fontSize: "0.9rem",
                        padding: "0.5rem",
                        cursor: "pointer",
                        background:
                          item.addressId === storeAddress.addressId
                            ? "rgb(255, 152, 0)"
                            : "#eeeeee",
                      }}
                      onClick={() => this.handleClick(item)}
                    >
                      {item.address}
                    </label>
                  </div>
                </div>
              );
            })}
          {showErrMsg && (
            <span id="orderAddress_EBox" style={{ color: "red" }}>
              Please Select the Any One
            </span>
          )}
          <button
            style={{
              marginTop: "1rem",
              color: "#2831c4",
              float: "right",
              border: "0",
              background:"unset",
              outline:"0"
            }}
            onClick={() => this.setProcessPopup("openAddAddress")}
          >
            <u>New Address</u>
          </button>
        </div>

        {storeListAddress &&
            storeListAddress.length > 0 && <div
          className="row"          
        >
          <div
            className="col-12 btn btn-success"
            onClick={() => this.nextStep()}
            style={{ textAlign: "center", margin: "0rem", bottom:" 6.5%", position: "fixed", width: "100%" }}
          >
            <span
              style={{
                textAlign: "center",
                fontSize: "1.2rem",
                cursor: "pointer",
              }}
            >
              Next
            </span>
          </div>
        </div>}
      </div>
      </div>
      </section>
      </>
    );
  }
}

const mapState = (state) => ({
  state: state.orderReducer,
});
const mapDispatch = {
  currentOrderProcess,
  selectedAddress,
};
export default connect(mapState, mapDispatch)(ListAddress);
