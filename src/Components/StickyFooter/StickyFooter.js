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
| Import folder path 
|--------------------------------------------------
*/
import { imagePath, storeIdDefault } from "../../Api/helper";

/**
 |--------------------------------------------------
 | Import path files
 |--------------------------------------------------
 */
import WebPath from "../../Routes/WebPath";

/**
|--------------------------------------------------
| Import css file
|--------------------------------------------------
*/
import "./StickyFooter.css";

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

export class StickyFooter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkoutCount: 0,
      isLogin: false,
    };
  }

  componentDidMount() {
    const isLogin = localStorage.getItem("login") ? true : false;
    const isSelectExist = localStorage.getItem("selectedList");
    let checkoutCount = 0,
      selectList = [];
    if (isSelectExist) {
      selectList = JSON.parse(isSelectExist);
      checkoutCount = selectList ? selectList.length : 0;
    }
    this.setState({ checkoutCount, isLogin });
  }

  componentDidUpdate(prevProps) {
    const { state } = this.props;
    const checkoutCount = state.selectedList && state.selectedList.length;
    const previousCount = prevProps.state && prevProps.state.selectedList && prevProps.state.selectedList.length;
    if (checkoutCount !== previousCount) {
      this.setState({ checkoutCount });
    }
  }

  render() {
    const { checkoutCount, isLogin } = this.state;

    return (
      <div>
        <div
          className="row"
          style={{
            margin: "0rem",
            bottom: "0",
            position: "fixed",
            width: "100%",
            background: "#f5ecce",
            zIndex: "999",
          }}
        >
          <div className="col100" style={{ padding: "0.2rem 0rem" }}>
            <div className="col33" style={{ textAlign: "center" }}>
              <Link to={WebPath.ProductList+ storeIdDefault}>
                <img
                  src={`${PUBLIC_URL}${imagePath}/shop.png`}
                  style={{ height: "2.5rem" }}
                  alt={"shop"}
                />
              </Link>
            </div>
            <div className="col33" style={{ textAlign: "center" }}>
              <Link to={WebPath.OrderCart}>
                <img
                  src={`${PUBLIC_URL}${imagePath}/supermarket.png`}
                  style={{ height: "2.5rem" }}
                  alt={"supermarket"}
                />
                {checkoutCount > 0 && (
                  <span className="proItemBadge">{checkoutCount}</span>
                )}
              </Link>
            </div>
            <div className="col33" style={{ textAlign: "center" }}>
              {!isLogin && (
                <Link to={WebPath.Login}>
                  <img
                    src={`${PUBLIC_URL}${imagePath}/wishlist.png`}
                    style={{ height: "2.5rem" }}
                    alt={"wishlist"}
                  />
                </Link>
              )}
              {isLogin && (
                <Link to={"/order-list"}>
                  <img
                    src={`${PUBLIC_URL}${imagePath}/wishlist.png`}
                    style={{ height: "2.5rem" }}
                    alt={"wishlist"}
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  state: state.productReducer,
});
const mapDispatch = {};
export default connect(mapState, mapDispatch)(StickyFooter);
