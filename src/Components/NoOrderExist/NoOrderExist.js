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
| Redirection helper component
|--------------------------------------------------
*/
// import { history } from "../../Routes/history";

/**
|--------------------------------------------------
| Import css file which uses for this component
|--------------------------------------------------
*/
import "./NoOrderExist.css";

/**
|--------------------------------------------------
| Rendering Class components
|--------------------------------------------------
*/
class NoOrderExist extends Component {
  
  render() {
    return (
      <>
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
                No Products are added in cart.
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
export default connect(mapState, mapDispatch)(NoOrderExist);