/**
|--------------------------------------------------
| Import React core components
|--------------------------------------------------
*/
import React, { Component } from "react";
import { Link } from "react-router-dom";

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
// import {
//   apiDomain,
//   productMethod,
//   searchAll,
//   searchParam,
//   selectMethod,
// } from "../../Api/helper";
// import { getApi } from "../../Api";

/**
|--------------------------------------------------
| Check with sample API output
|--------------------------------------------------
*/
import sampleApi from "./sampleApi";

/**
|--------------------------------------------------
| Import css file
|--------------------------------------------------
*/
import "./Footer.css";

/**
|--------------------------------------------------
| Rendering Class components
|--------------------------------------------------
*/
export class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      socialMenu: [],
    };
  }

/**
|--------------------------------------------------
| Works only one time once page refresh
|--------------------------------------------------
*/

  async componentDidMount() {
    // const param = searchParam + searchAll;
    // const requestUrl = apiDomain + productMethod + selectMethod + "?" + param;
    // const { data, error } = await getApi(requestUrl);
    // if (data && data.length > 0) {
    //   this.constructApiData(data);
    // } else {
    //   alert(error);
    // }
    const response = sampleApi.response; // API response
    this.constructApiData(response);
  }

  /**
|--------------------------------------------------
| From API response - construct data as we require
|--------------------------------------------------
*/

  constructApiData = (data) => {
    let socialMenu = [];
    if (data.docs && data.docs.length > 0) {
      const allProducts = data.docs;
      socialMenu = allProducts.map((item) => {
        const composeObj = {
          socialLink: item.link,
          socialLogo: item.logo,
          socialAlt: item.alt,
        };
        return composeObj;
      });
    }
    this.setState({ socialMenu });
  };

  render() {
    const { socialMenu } = this.state;
    return (
      <div>
        <footer className="footer" style={{ paddingBottom: "3rem" }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-5 mb-lg-0">
                <ul className="social-links">
                  <li>
                    {socialMenu &&
                      socialMenu.length > 0 &&
                      socialMenu.map((item, index) => {
                        return (
                          <a
                            href={item.socialLink}
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                            key={index}
                          >
                            <img
                              src={item.socialLogo}
                              style={{ height: "28px" }}
                              alt={item.socialAlt}
                              className="mr15 hover_up mb10"
                            />
                          </a>
                        );
                      })}
                  </li>
                </ul>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-5 mb-lg-0">
                <ul>
                  <li>
                    <Link to={WebPath.Terms}>Terms and conditions</Link>
                  </li>
                  <li>
                    <Link to={WebPath.Privacy}>Privacy</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-5 mb-lg-0">
                <ul>
                  <li className="text_black mb10" style={{ color: "black" }}>
                    <b>Registered Office</b>
                    <br /> Sec 88 Faridabad Haryana
                  </li>
                  <li>© 2017 - 2020 Shopview.in</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
