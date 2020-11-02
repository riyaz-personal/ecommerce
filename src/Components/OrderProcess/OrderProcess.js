/**
|--------------------------------------------------
| Import React core components
|--------------------------------------------------
*/
import React, { Component } from "react";
import { connect } from "react-redux";

/**
|--------------------------------------------------
| Import path to be use for redirection dynamically
|--------------------------------------------------
*/
import WebPath from "../../Routes/WebPath";

/**
|--------------------------------------------------
| Import action file to store data
|--------------------------------------------------
*/
import { currentOrderProcess } from "../../Actions/orderProcess";

/**
|--------------------------------------------------
| Import component files
|--------------------------------------------------
*/
// Header component
import Header from "../Header";
import PaymentMethod from "./Payment/PaymentMethod";
import ListAddress from "./Address/ListAddress";
import AddAddress from "./Address/AddAddress";

/**
|--------------------------------------------------
| Redirection helper component
|--------------------------------------------------
*/
import { history } from "../../Routes/history";

/**
|--------------------------------------------------
| Import Api helper files
|--------------------------------------------------
*/
import { imagePath, storeIdDefault } from "../../Api/helper";
// import { getApi } from "../../Api";

/**
|--------------------------------------------------
| Import css file which uses for this component
|--------------------------------------------------
*/
// import "./OrderProcess.css";

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

class OrderProcess extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openPayment: false,
      openListAddress: false,
      openAddAddress: false,
      totalPopupState: ["openListAddress", "openPayment", "openAddAddress"],
      storeListAddress:[],
      payingMethod: []
    };
  }

  async componentDidMount() {
    // const requestUrl = apiDomain + listAddressMethod;
    // const storeListAddress = await getApi(requestUrl);
    // console.log('storeListAddress', storeListAddress);
    const { currentOrderProcess, selectedProduct: {selectedList} } = this.props;
    if(!selectedList || selectedList.length === 0){
      history.push(WebPath.ProductList + storeIdDefault);
    }
    const storeListAddress = [{
      "addressId": 1,
      "address": "Office : 3asdf, Asdf, Asdf, Fasdf, Asdf"
    }, {
      "addressId": 2,
      "address": "Home : 3asdf, Asdf, Asdf, Fasdf, Asdf"
    },{
      "addressId": 3,
      "address": "Office : fasdfasdf, fasdf, asdf, Fasdf, Asdf"
    }];
    // const storeListAddress = [];
    const payingMethod = [{
      modeImage: `${PUBLIC_URL}${imagePath}/payment_cod.png`,
      modeAlt: "cashOnDelivery",
      mode: "COD"
    },{
      modeImage: `${PUBLIC_URL}${imagePath}/payment_paytm.png`,
      modeAlt: "paytm",
      mode: "PAYTM"
    }]
    const openListAddress = true;
    currentOrderProcess("openListAddress");
    this.setState({ openListAddress, storeListAddress, payingMethod });
  }

  componentDidUpdate(prevProps) {
    const { totalPopupState } = this.state;
    const {
      state: { currentPopup },
    } = this.props;
    if (prevProps.state.currentPopup !== currentPopup) {
      const remainingPopupClose = totalPopupState
        .filter((item) => item !== currentPopup)
        .map((sub) => {
          return { [sub]: false };
        });
      // All other process to be false state value
      const remainingState = Object.assign({}, ...remainingPopupClose);
      this.setState({ [currentPopup]: true, ...remainingState });
    }
  }

  openComponentClick = (popup) => {
    const { currentOrderProcess } = this.props;
    currentOrderProcess(popup);
  };

  render() {
    const { openPayment, openListAddress, openAddAddress, storeListAddress, payingMethod } = this.state;

    return (
      <>
        <Header />
        <section
          style={{ paddingTop: "4.5rem", paddingBottom: "1rem" }}
          className="bg-section-secondary"
        >
          <div
            className="container"
            style={{
              paddingRight: "0",
              paddingLeft: "0",
              marginLeft: "0",
              marginRight: "0",
            }}
          >
            {!openListAddress && <div className="row" style={{ margin: "0rem" }}>
              <div
                className="col100"
                id="loginScreenBackBtn"
                style={{ padding: "0rem", display: "block" }}
              >
                <div className="col33">
                  <img
                    src={`${PUBLIC_URL}${imagePath}/return_back.png`}
                    style={{ height: "2.5rem", cursor: "pointer" }}
                    alt={"back.png"}
                    onClick={()=>this.openComponentClick("openListAddress")}
                  />
                </div>
              </div>
            </div>}
          </div>
        </section>
        {openListAddress && <ListAddress storeListAddress={storeListAddress} />}
        {openAddAddress && <AddAddress />}
        {openPayment && <PaymentMethod payingMethod={payingMethod} />}        
      </>
    );
  }
}

const mapState = (state) => ({
  state: state.orderReducer,
  selectedProduct: state.productReducer
});
const mapDispatch = {
  currentOrderProcess,
};
export default connect(mapState, mapDispatch)(OrderProcess);