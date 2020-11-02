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
| Import component files
|--------------------------------------------------
*/
import Header from "../Header";

/**
|--------------------------------------------------
| Import folder path 
|--------------------------------------------------
*/
import { storeIdDefault } from "../../Api/helper";

/**
|--------------------------------------------------
| Redirection helper component
|--------------------------------------------------
*/
// import { history } from "../../Routes/history";

/**
|--------------------------------------------------
| Import css file which uses for this component
|--------------------------------------------------
*/
import "./OrderThanks.css";

/**
|--------------------------------------------------
| Rendering Class components
|--------------------------------------------------
*/
class OrderThanks extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       orderNo: 0
    }
  }

  componentDidMount() {
    const { state: { orderNumber } } = this.props;
    this.setState({ orderNo: orderNumber });
  }
  
  render() {
    const { orderNo } = this.state;
    
    return (
      <>
        <Header />
        <section
          style={{ paddingTop: "13.5rem", paddingBottom: "1rem" }}
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
            <div
              id="thanksOrderDivContent"
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
            >
              <h4 style={{ color: "black" }} id="thanksOrderMsg">
                Thanks for Order, Your Invoice Number : {orderNo}
              </h4>

              <Link
                to={WebPath.ProductList + storeIdDefault}
                className="form-control btn btn-success col50"
                style={{ marginTop: "1rem" }}
              >
                Shop More
              </Link>
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
const mapDispatch = {};
export default connect(mapState, mapDispatch)(OrderThanks);