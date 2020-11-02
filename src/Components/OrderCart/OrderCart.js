/**
|--------------------------------------------------
| Import React core components
|--------------------------------------------------
*/
import React, { Component } from "react";
import { Link } from "react-router-dom";
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
import { storeSelectList } from "../../Actions/productCalculation";

/**
 |--------------------------------------------------
 | Import component files
 |--------------------------------------------------
 */
import Header from "../Header";
import ProductCount from "../ProductCount";
import NoOrderExist from "../NoOrderExist";

/**
|--------------------------------------------------
| Redirection helper component
|--------------------------------------------------
*/
// import { history } from "../../Routes/history";

/**
|--------------------------------------------------
| Import folder path 
|--------------------------------------------------
*/
import { imagePath } from "../../Api/helper";

/**
|--------------------------------------------------
| Import css file
|--------------------------------------------------
*/
import "./OrderCart.css";

/**
|--------------------------------------------------
| Get public root path folder 
|--------------------------------------------------
*/
const { PUBLIC_URL } = process.env;

/**
|--------------------------------------------------
| Rendering class components
|--------------------------------------------------
*/
class OrderCart extends Component {
  /**
|--------------------------------------------------
| Works only one time once page refresh
|--------------------------------------------------
*/
  async componentDidMount() {
    const { storeSelectList } = this.props;
    let selectedList = localStorage.getItem("selectedList");
    if (selectedList) {
      selectedList = selectedList ? JSON.parse(selectedList) : [];
      if (selectedList && selectedList.length > 0) {
        const subtotal =
          selectedList && selectedList.length > 0
            ? selectedList.reduce((acc, data) => acc + data.individualPrice, 0)
            : 0;
        storeSelectList(selectedList, subtotal);
      } 
      // else {
      //   history.push(WebPath.ProductList);
      // }
    }
  }

  componentDidUpdate() {
    let selectedList = localStorage.getItem("selectedList");
    selectedList = selectedList ? JSON.parse(selectedList) : [];
    if (!selectedList || selectedList.length === 0) {
      // history.push(WebPath.ProductList);
    }
  }

  render() {
    const {
      state: { selectedList, subtotal },
    } = this.props;

    return (
      <>
        <Header />
        <section
          style={{ paddingRight: "0.5rem" }}
          className="bg-section-secondary slice"
        >
          <div
            className="container"
            style={{
              paddingRight: 0,
              paddingLeft: 0,
              marginLeft: 0,
              marginRight: 0,
            }}
            id="cartOrderProductContainer"
          >
            {
              selectedList && selectedList.length === 0 && <NoOrderExist />
            }
            {selectedList && selectedList.length > 0 && (
              <div
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  overflowX: "hidden",
                  marginBottom: "2rem",
                }}
              >
                {selectedList &&
                  selectedList.map((item, index) => {
                    if (item.selectedCount > 0) {
                      const individualTotal =
                        item.selectedCount * item.sellingPrice;

                      return (
                        <div
                          id="proListContainer"
                          className="productContainer"
                          key={index}
                        >
                          <div className="row">
                            <div className="col-3">
                              {item.productImage && (
                                <img
                                  src={item.productImage}
                                  className="proImage"
                                  alt={"proImage"}
                                />
                              )}
                              {!item.productImage && (
                                <img
                                  src={`${PUBLIC_URL}${imagePath}/sample.jpg`}
                                  className="proImage"
                                  alt={"proImage"}
                                />
                              )}
                            </div>
                            <div className="col-9">
                              <div className="row">
                                <span className="proName">
                                  {item.productName}
                                </span>
                              </div>
                              <div className="col100">
                                <div className="col30">
                                  <span className="proUnit">
                                    {" "}
                                    {item.productSize}
                                  </span>
                                </div>
                                <div className="col30">
                                  <span>
                                    <img
                                      src={`${PUBLIC_URL}${imagePath}/rupee.png`}
                                      style={{ paddingRight: "0.5rem" }}
                                      alt={"proImage"}
                                    />{" "}
                                    {item.sellingPrice}
                                  </span>
                                </div>
                                <div className="col40">
                                  <span className="proOffAmt">
                                    {item.offer}% OFF
                                  </span>
                                </div>
                              </div>
                              <div className="col100">
                                <ProductCount
                                  data={item}
                                  pageName={"cart"}
                                  className={"col20"}
                                  key={index}
                                />
                                <div className="col40">
                                  <span>
                                    <img
                                      src={`${PUBLIC_URL}${imagePath}/rupee.png`}
                                      style={{ paddingRight: "0.5rem" }}
                                      alt={"proImage"}
                                    />{" "}
                                    {individualTotal}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <hr
                                style={{
                                  marginTop: "0.5rem",
                                  marginBottom: "0.5rem",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    }
                    return <></>;
                  })}
                <div
                  className="col-12"
                  style={{ paddingLeft: "0", paddingRight: "1rem" }}
                >
                  <div className="col60">Total Item</div>
                  <div className="col40" style={{ textAlign: "right" }}>
                    {selectedList.length} Items
                  </div>
                </div>
                <div
                  className="col-12"
                  style={{ paddingLeft: "0", paddingRight: "1rem" }}
                >
                  <div className="col60">Sub Total</div>
                  <div className="col40" style={{ textAlign: "right" }}>
                    <img
                      src={`${PUBLIC_URL}${imagePath}/rupee.png`}
                      style={{ paddingRight: "0.5rem" }}
                      alt={"proImage"}
                    />{" "}
                    {subtotal}
                  </div>
                </div>
                <div
                  className="col-12"
                  style={{ paddingLeft: "0", paddingRight: "1rem" }}
                >
                  <div className="col60">Delivery Charges</div>
                  <div className="col40" style={{ textAlign: "right" }}>
                    <span style={{ color: "red" }}> Free</span>
                  </div>
                </div>
                <div
                  className="col-12"
                  style={{ paddingLeft: "0", paddingRight: "1rem" }}
                >
                  <div className="col60">Your Total Savings</div>
                  <div className="col40" style={{ textAlign: "right" }}>
                    <span style={{ color: "red" }}>
                      {" "}
                      <img
                        src={`${PUBLIC_URL}${imagePath}/rupee.png`}
                        style={{ paddingRight: "0.5rem" }}
                        alt={"proImage"}
                      />{" "}
                      0
                    </span>
                  </div>
                </div>
              </div>
            )}
            {subtotal > 0 && <Link to={WebPath.OrderProcess}>
              <div
                className="row"
                style={{
                  margin: "0rem",
                  bottom: "6.5%",
                  position: "fixed",
                  width: "100%",
                }}
              >
                <div className="col-12 btn btn-success">
                  <span style={{ float: "left", fontSize: "1.2rem" }}>
                    Proceed to Checkout
                  </span>
                  <img
                    src={`${PUBLIC_URL}${imagePath}/rupee.png`}
                    style={{ height: "1rem", paddingRight: "0.5rem" }}
                    alt={"proImage"}
                  />
                  {subtotal}
                  <span style={{ fontSize: "1.2rem" }}> &gt;</span>
                </div>
              </div>
            </Link>}
          </div>
        </section>
      </>
    );
  }
}

const mapState = (state) => ({
  state: state.productReducer,
});
const mapDispatch = {
  storeSelectList,
};
export default connect(mapState, mapDispatch)(OrderCart);
