/**
|--------------------------------------------------
| Import React core components
|--------------------------------------------------
*/
import React, { Component } from "react";
import { Link } from "react-router-dom";

/**
 |--------------------------------------------------
 | Import component files
 |--------------------------------------------------
 */
import Header from "../Header";

/**
|--------------------------------------------------
| Import path to be use for redirection dynamically
|--------------------------------------------------
*/
import WebPath from "../../Routes/WebPath";

/**
|--------------------------------------------------
| Import Api helper files
|--------------------------------------------------
*/
import {
  // apiDomain,
  // productMethod,
  // searchAll,
  // searchParam,
  // selectMethod,
  storeIdDefault,
} from "../../Api/helper";
// import { getApi } from "../../Api";

/**
|--------------------------------------------------
| Import css file which uses for this component
|--------------------------------------------------
*/
import "./OrderList.css";

/**
|--------------------------------------------------
| Rendering Class components
|--------------------------------------------------
*/
class OrderList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       orderBefore: []
    }
  }
  
  render() {
    const { orderBefore } = this.state;
    return (
      <>
        <Header />
        {orderBefore.length === 0 && <section
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
            <div
              id="thanksOrderDivContent"
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
            >
              <h4 style={{ color: "black" }} id="thanksOrderMsg">
                No Order Exists
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
        </section>}
      </>
    );
  }
}

export default OrderList;
