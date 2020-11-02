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
| Redirection helper component
|--------------------------------------------------
*/
import { history } from "../../Routes/history";

/**
 |--------------------------------------------------
 | Import path files
 |--------------------------------------------------
 */
import WebPath from "../../Routes/WebPath";

/**
|--------------------------------------------------
| Import Api helper files
|--------------------------------------------------
*/
import { logoutMethod, apiDomain } from "../../Api/helper";
import { postApi } from "../../Api";

/**
|--------------------------------------------------
| Import folder path 
|--------------------------------------------------
*/
import { imagePath } from "../../Api/helper";

/**
 |--------------------------------------------------
 | Import action file to store data
 |--------------------------------------------------
 */
import { storeSelectList } from "../../Actions/productCalculation";

/**
|--------------------------------------------------
| Import css file
|--------------------------------------------------
*/
import "./Header.css";

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

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    let { isLoggedIn } = this.state;
    const isloginExist = localStorage.getItem("login");
    isLoggedIn = isloginExist ? true : false;
    this.setState({ isLoggedIn });
  }

  logout = async () => {
    const { storeSelectList } = this.props;
    const requestUrl = apiDomain + logoutMethod;
    const inputData = {
      mod: "CUSTOMER_LOGOUT",
      data_arr: { customer_id: "1" },
    };
    const { data, error } = await postApi(requestUrl, inputData);
    if (data) {
      localStorage.clear();
      storeSelectList([], 0); // reset redux value
      history.push(WebPath.Home);
    } else {
      alert(error);
    }
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div>
        <div
          id="navbar-top-main"
          className="navbar-top nav_white"
          style={{ background: "#fff" }}
        >
          <div
            className="container px-4"
            style={{ maxWidth: "100%", paddingLeft: "0.5rem" }}
          >
            <div className="navbar-nav align-items-center">
              <div className="d-lg-inline-block">
                <Link to="/">
                  <img
                    style={{ width: "7.5rem" }}
                    src={`${PUBLIC_URL}${imagePath}/shop_logo.png`}
                    alt={"shoplogo"}
                  />
                </Link>
              </div>
              <div className="ml-auto">
                <ul className="nav">
                  <li className="nav-item">
                    {!isLoggedIn && (
                      <Link
                        to={WebPath.Login}
                        className="nav-link"
                        style={{ color: "#000" }}
                      >
                        Signin
                      </Link>
                    )}
                    {isLoggedIn && (
                      <span
                        onClick={() => this.logout()}
                        className="nav-link"
                        style={{ color: "#000", cursor: "pointer" }}
                      >
                        Logout
                      </span>
                    )}
                  </li>{" "}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = () => ({});
const mapDispatch = { storeSelectList };
export default connect(mapState, mapDispatch)(Header);
