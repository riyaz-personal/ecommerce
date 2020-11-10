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
import {
  apiDomain,
  listAddressMethod,
  imagePath,
  storeIdDefault,
} from "../../Api/helper";
import { postApi } from "../../Api";

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
      storeListAddress: [],
      payingMethod: [],
    };
  }

  async componentDidMount() {
    const {
      currentOrderProcess,
      selectedProduct: { selectedList },
    } = this.props;
    if (!selectedList || selectedList.length === 0) {
      history.push(WebPath.ProductList + storeIdDefault);
    }    
    const storeListAddress = await this.getListAddressApi();
    const payingMethod = [
      {
        modeImage: `${PUBLIC_URL}${imagePath}/payment_cod.png`,
        modeAlt: "cashOnDelivery",
        mode: "cod",
      },
      {
        modeImage: `${PUBLIC_URL}${imagePath}/payment_paytm.png`,
        modeAlt: "paytm",
        mode: "PAYTM",
      },
    ];
    const openListAddress = true;
    currentOrderProcess("openListAddress");
    this.setState({ openListAddress, storeListAddress, payingMethod });
  }

 async componentDidUpdate(prevProps) {
    let { totalPopupState, storeListAddress } = this.state;
    const {
      state: { currentPopup },
    } = this.props;
    if (prevProps.state.currentPopup !== currentPopup) {
      if(currentPopup === "openListAddress"){
        storeListAddress = await this.getListAddressApi();
      }
      const remainingPopupClose = totalPopupState
        .filter((item) => item !== currentPopup)
        .map((sub) => {
          return { [sub]: false };
        });
      // All other process to be false state value
      const remainingState = Object.assign({}, ...remainingPopupClose);
      this.setState({ [currentPopup]: true, ...remainingState, storeListAddress });
    }
  }

  getListAddressApi = async () =>{
    const requestUrl = apiDomain + listAddressMethod;
    const customer_id = localStorage.getItem("customer_id");
    const inputData = { mod: "ADDRESS_LIST", data_arr: { customer_id } };
    let { data } = await postApi(requestUrl, inputData);
    const sampleResponse = {
      status: "200",
      status_message: "Success",
      data: {
        success: [
          {
            address_id: "4",
            customer_id: "1",
            address_title: "Office",
            address: "T2,1403,RPS Savana",
            landmark: "Kheri Road",
            area_name: "Faridabad",
            city_name: "Faridabad",
            state_name: "Faridabad",
            country_name: "Faridabad",
            pincode: "121002",
            latitude: "77.355772331357",
            longitude: "",
            full_address:
              "T2,1403,RPS Savana, Kheri Road, Faridabad, Faridabad, Faridabad",
          },
        ],
      },
    };
    let storeListAddress = [];
    if(data && data.data && data.data.success){
      if(data.data.success.length > 0){
        storeListAddress = data.data.success.map((item) => {
          const data = {
            addressId: item.address_id,
            address: `${item.address_title} : ${item.address},${item.landmark},${item.area_name},${item.city_name},${item.state_name},${item.country_name}`
          }
          return data;
        })
      }
    }else{
      if(sampleResponse.data.success.length > 0){
        storeListAddress = sampleResponse.data.success.map((item) => {
          const data = {
            addressId: item.address_id,
            address: `${item.address_title} : ${item.address},  ${item.landmark},  ${item.city_name},  ${item.state_name},  ${item.country_name}`
          }
          return data;
        })
      }
    }
    return storeListAddress;
  }

  openComponentClick = (popup) => {
    const { currentOrderProcess } = this.props;
    currentOrderProcess(popup);
  };

  render() {
    const {
      openPayment,
      openListAddress,
      openAddAddress,
      storeListAddress,
      payingMethod,
    } = this.state;

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
            {!openListAddress && (
              <div className="row" style={{ margin: "0rem" }}>
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
                      onClick={() => this.openComponentClick("openListAddress")}
                    />
                  </div>
                </div>
              </div>
            )}
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
  selectedProduct: state.productReducer,
});
const mapDispatch = {
  currentOrderProcess,
};
export default connect(mapState, mapDispatch)(OrderProcess);
