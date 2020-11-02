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
 | Import path files
 |--------------------------------------------------
 */
import WebPath from "../../Routes/WebPath";

/**
|--------------------------------------------------
| Import folder path 
|--------------------------------------------------
*/
import { imagePath, solarMethod } from "../../Api/helper";

/**
 |--------------------------------------------------
 | Import component files
 |--------------------------------------------------
 */
import Search from "../Search";
import Header from "../Header";
import Footer from "../Footer";
import ProductCount from "../ProductCount";

/**
|--------------------------------------------------
| Import action file to store data
|--------------------------------------------------
*/
import { storeSelectList } from "../../Actions/productCalculation";
import {
  searchProductList,
  selectedProductImage,
} from "../../Actions/productList";

/**
|--------------------------------------------------
| Import Api helper files
|--------------------------------------------------
*/
import {
  apiDomain,
  productMethod,
  selectMethod,
  searchAll,
  searchParam,
  storeParam,
} from "../../Api/helper";
import { postApi } from "../../Api";

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
import "./ProductList.css";

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

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      allProducts: [],
      loading: false,
    };
  }

  /**
|--------------------------------------------------
| Works only one time once page refresh
|--------------------------------------------------
*/
  async componentDidMount() {
    const { storeSelectList, match } = this.props;
    const storeId = match.params.id ? match.params.id : searchAll;
    const param = searchParam + storeParam + storeId;
    const dataParam = selectMethod + "?" + param;
    const requestUrl = apiDomain + solarMethod;
    const inputData = {
      solar_name: productMethod,
      data_param: dataParam,
    };
    this.setState({ loading: true });
    const { data } = await postApi(requestUrl, inputData);
    let productList;
    if (data && data.length > 0) {
      this.constructApiData(data);
      productList = await this.constructApiData(data);
    } else {
      const response = sampleApi.response;
      productList = await this.constructApiData(response);
      // alert(error);
    }
    let selectedList = localStorage.getItem("selectedList");
    if (selectedList) {
      // Replace stored data with remaining product.
      selectedList = JSON.parse(selectedList);
      productList =
        productList && productList.length > 0
          ? productList.map((item) => {
              const isExistIndex = selectedList.findIndex(
                (sub) => sub.productId === item.productId
              );
              if (isExistIndex > -1) {
                item = selectedList[isExistIndex];
                return item;
              }
              return item;
            })
          : [];
      //Add subtotal amount
      const subtotal =
        selectedList && selectedList.length > 0
          ? selectedList.reduce(
              (accumulator, pilot) => accumulator + pilot.individualPrice,
              0
            )
          : 0;
      storeSelectList(selectedList, subtotal);
    }
    let allProducts = productList;
    this.setState({ productList, allProducts, loading: false });
  }

  componentDidUpdate(prevProps) {
    const { state } = this.props;
    const checkoutCount = state.searchList && state.searchList.length;
    const previousCount =
      prevProps.state &&
      prevProps.state.searchList &&
      prevProps.state.searchList.length;
    if (checkoutCount !== previousCount) {
      this.setState({ productList: state.searchList });
    }
  }

  /**
|--------------------------------------------------
| From API response - construct data as we require
|--------------------------------------------------
*/
  constructApiData = (data) => {
    let productList = [];
    if (data.docs && data.docs.length > 0) {
      const allProducts = data.docs;
      productList = allProducts.map((item) => {
        const composeObj = {
          offer: 50,
          productId: item.product_id,
          productImage: item.product_image,
          productName: item.product_name,
          productSize: "L Size",
          productUnit: item.product_unit,
          sellingPrice: item.sell_price,
          actualPrice: item.purchase_price,
          availableCount: item.qty,
          brandName: item.brand_name,
        };
        return composeObj;
      });
    }
    return productList;
  };

  /**
  |--------------------------------------------------
  | Store selected Product in redux
  |--------------------------------------------------
  */
  storeSelectedProduct = (image) => {
    const { selectedProductImage } = this.props;
    image = image ? image : `${PUBLIC_URL}${imagePath}/rupee.png`;
    selectedProductImage(image);
  };

  render() {
    const { productList, allProducts, loading } = this.state;
    return (
      <>
        <Header />
        <section
          className="slice product-lists"
          style={{ paddingTop: "4rem", background: "#F3F5FB" }}
        >
          <div
            className="container relative"
            style={{ maxWidth: "98%", marginLeft: "1rem", marginRight: "1rem" }}
          >
            <div className="row">
              <div className="col-lg-12">
                <Search allProducts={allProducts} />
                {loading && (
                  <div
                    className="row col-lg-12"
                    style={{ justifyContent: "center" }}
                  >
                    <div className="d-flex justify-content-center">
                      <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  </div>
                )}
                <div className="row col-lg-12">
                  {productList &&
                    productList.map((item, index) => {
                      return (
                        <div
                          className="col-lg-4"
                          style={{ paddingRight: "10px", paddingLeft: "10px" }}
                          key={index}
                        >
                          <div
                            data-spy="scroll"
                            data-target="#navbar-example2"
                            data-offset="5000"
                          >
                            <div
                              className="filter_me"
                              style={{
                                color: "#919fb0",
                                fontWeight: "600",
                                fontSize: "20px",
                              }}
                            ></div>
                            <div className="card hover-shadow-lg hover-scale-110 filter_me">
                              <div
                                className="card-body"
                                style={{ padding: "0.5rem 1rem" }}
                              >
                                <div className="row">
                                  <div className="col-lg-12">
                                    <Link
                                      to={WebPath.ProductDetail}
                                      onClick={() =>
                                        this.storeSelectedProduct(
                                          item.productImage
                                        )
                                      }
                                    >
                                      <p
                                        style={{
                                          marginBottom: "0rem",
                                          paddingBottom: "2rem",
                                        }}
                                      >
                                        <span
                                          className="badge badge-pill badge-lg"
                                          style={{
                                            color: "#fff",
                                            backgroundColor: "#79c1b5",
                                            float: "left",
                                          }}
                                        >
                                          {item.offer}% Off
                                        </span>
                                      </p>
                                      {item.productImage && (
                                        <div
                                          style={{
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            backgroundImage: `url(${item.productImage})`,
                                            height: "22rem",
                                            width: "100%",
                                            margin: "0 auto",
                                            textAlign: "center",
                                          }}
                                        ></div>
                                      )}
                                      {!item.productImage && (
                                        <div
                                          style={{
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            backgroundImage: `url('${PUBLIC_URL}${imagePath}/noImage.png')`,
                                            height: "22rem",
                                            width: "100%",
                                            margin: "0 auto",
                                            textAlign: "center",
                                          }}
                                        ></div>
                                      )}
                                    </Link>
                                  </div>

                                  <div className="col-lg-12">
                                    <p
                                      className="ma-0 fw600"
                                      style={{
                                        marginTop: "1rem",
                                        fontSize: "0.9rem",
                                        minHeight: "2.7rem",
                                        maxHeight: "2.7rem",
                                        marginBottom: "0rem",
                                      }}
                                    >
                                      {item.productName}
                                    </p>
                                    <p className="mb-2">
                                      {item.productUnit}
                                      <span
                                        className="colorDot"
                                        style={{
                                          float: "right",
                                          backgroundColor: "#ccc",
                                          border: "1px solid #ccc",
                                        }}
                                        title="Black"
                                      ></span>
                                    </p>
                                    <p className="mb-2">
                                      <span style={{ paddingRight: "1rem" }}>
                                        <s>
                                          <img
                                            src={`${PUBLIC_URL}${imagePath}/rupee.png`}
                                            alt={"sample"}
                                          />{" "}
                                          {item.sellingPrice}
                                        </s>
                                      </span>
                                      <span>
                                        <img
                                          src={`${PUBLIC_URL}${imagePath}/rupee.png`}
                                          alt={"sample"}
                                        />{" "}
                                        {item.actualPrice}
                                      </span>
                                    </p>
                                  </div>
                                  <ProductCount
                                    data={item}
                                    key={index}
                                    pageName={"productList"}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

const mapState = (state) => ({
  state: state.searchReducer,
});
const mapDispatch = {
  storeSelectList,
  searchProductList,
  selectedProductImage,
};
export default connect(mapState, mapDispatch)(ProductList);
