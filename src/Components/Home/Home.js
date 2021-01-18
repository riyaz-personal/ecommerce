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
  apiDomain,
  masterListMethod,
  storeIdDefault,
  imagePath,
} from "../../Api/helper";
import { postApi } from "../../Api";

/**
|--------------------------------------------------
| Check with sample API output - [sv-product api]
|--------------------------------------------------
*/
// import sampleApi from "./sampleApi";

/**
|--------------------------------------------------
| Import css file
|--------------------------------------------------
*/
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

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

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageList: [],
    };
  }

  async componentDidMount() {
    const requestUrl = apiDomain + masterListMethod;
    const inputData = {
      mod: "IMAGE_SLIDER",
      data_arr: {},
    };
    const { data } = await postApi(requestUrl, inputData);
    if (data) {
      this.constructApiData(data);
    } 
  }

  constructApiData = (data) => {
    let imageList = [];
    if (
      data &&
      data.data &&
      data.data.success &&
      data.data.success.length > 0
    ) {
      const allImages = data.data.success;
      imageList = allImages.map((item) => {
        const composeObj = {
          image: item.image_path,
          imageLink: item.web_link,
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
                    src={`${PUBLIC_URL}${imagePath}/blueburylogo.png`}
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
                    <a rel={"noopener noreferrer"} href={item.imageLink} target={"_blank"}>
                      {/* <Link to={item.imageLink}> */}
                        <img
                          src={item.image}
                          style={{
                            width: "100%",
                            border: "5px solid",
                            margin: "5px",
                          }}
                          alt={"home2"}
                        />
                      {/* </Link> */}

                    </a>
                    </div>
                  </div>
                );
              })}

            <div className="row">
              <div className="col-md-12 text-center">
                <a
                  href={
                    "https://play.google.com/store/apps/details?id=com.siderealdot.blueberry"
                  }
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                >
                  <img
                    src={`${PUBLIC_URL}${imagePath}/playstore.png`}
                    style={{ width: "20rem" }}
                    alt={"home7"}
                  />
                </a>
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
