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
 | Import component files
 |--------------------------------------------------
 */
import Footer from "../Footer";

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
| Check with sample API output - [sv-product api]
|--------------------------------------------------
*/
import sampleApi from "./sampleApi";

/**
|--------------------------------------------------
| Import css file
|--------------------------------------------------
*/
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

/**
|--------------------------------------------------
| Rendering Class components
|--------------------------------------------------
*/

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageList: [],
    };
  }

  async componentDidMount() {
    // const param = searchParam + searchAll;
    // const requestUrl = apiDomain + productMethod + selectMethod + "?" + param;
    // const { data, error } = await getApi(requestUrl);
    // if (data && data.length > 0) {
    //   this.constructApiData(data);
    // } else {
    //   alert(error);
    // }
    const response = sampleApi.response;
    this.constructApiData(response);
  }

  constructApiData = (data) => {
    let imageList = [];
    if (data.docs && data.docs.length > 0) {
      const allImages = data.docs;
      imageList = allImages.map((item) => {
        const composeObj = {
          image: item.image,
          imageLink: item.imageLink,
        };
        return composeObj;
      });
    }
    this.setState({ imageList });
  };

  render() {
    const { imageList } = this.state;

    return (
      <div>
        <section
          style={{ paddingTop: "20px" }}
          className="bg-section-secondary slice"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-2 offset-md-5 col-sm-6 offset-sm-0">
                <h1>
                  <img
                    src="https://mobatic.sidereal.in/shopping/images/blueburylogo.png"
                    style={{ width: "10rem" }}
                    alt={"blueburylogo"}
                  />
                </h1>
              </div>
              <div className="col-md-5 col-sm-6 ">
                <Link
                  to={WebPath.ProductList + storeIdDefault}
                  className="btn btn-primary"
                  style={{ float: "right" }}
                >
                  SHOP NOW
                </Link>
              </div>
            </div>

            {imageList &&
              imageList.length > 0 &&
              imageList.map((item, index) => {
                return (
                  <div className="row" key={index}>
                    <div className="col-md-12">
                      <Link to={item.imageLink}>
                        <img
                          src={item.image}
                          style={{
                            width: "100%",
                            border: "5px solid",
                            margin: "5px",
                          }}
                          alt={"home2"}
                        />
                      </Link>
                    </div>
                  </div>
                );
              })}

            <div className="row">
              <div className="col-md-12 text-center">
                <Link
                  target={"_blank"}
                  to={
                    "https://play.google.com/store/apps/details?id=com.siderealdot.blueberry"
                  }
                >
                  {" "}
                  <img
                    src="https://mobatic.sidereal.in/shopping/images/playstore.png"
                    style={{ width: "20rem" }}
                    alt={"home7"}
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
