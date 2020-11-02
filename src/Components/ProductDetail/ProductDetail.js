/**
|--------------------------------------------------
| Import React core components
|--------------------------------------------------
*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

/**
|--------------------------------------------------
| Import action file to store data
|--------------------------------------------------
*/
import { storeSelectList } from "../../Actions/productCalculation";
import { searchProductList } from "../../Actions/productList";

/**
 |--------------------------------------------------
 | Import component files
 |--------------------------------------------------
 */
import Header from "../Header";
import Footer from "../Footer";
import ProductCount from "../ProductCount";

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
import "./ProductDetail.css";

/**
|--------------------------------------------------
| Rendering Class components
|--------------------------------------------------
*/
class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productInfo: {}
    };
  }
  /**
|--------------------------------------------------
| Works only one time once page refresh
|--------------------------------------------------
*/
async componentDidMount() {
  // const { storeSelectList } = this.props;
  // const param = searchParam + searchAll;
  // const requestUrl = apiDomain + productMethod + selectMethod + "?" + param;
  // const { data, error } = await getApi(requestUrl);
  // if (data && data.length > 0) {
  //   this.constructApiData(data);
  // } else {
  //   alert(error);
  // }
  const response = sampleApi.data;
  let productInfo = await this.constructApiData(response);
  this.setState({ productInfo });
}

/**
|--------------------------------------------------
| From API response - construct data as we require
|--------------------------------------------------
*/
constructApiData = (data) => {
  const { state: { selectedImage } } = this.props
  let productList = {};
  if (data && data.success) {
    const productInfo = data.success.product_info;
    productList = {
      offer: 50,
      productId: productInfo.product_id,
      productImage: selectedImage,
      productName: productInfo.product_name,
      productUnit: productInfo.unit,
      productSize: "L Size",
      sellingPrice: productInfo.sell_price,
      actualPrice: productInfo.purchase_price,
      availableCount: productInfo.quantity,
      brandName: productInfo.brand_name
    };
  }
  return productList;
};

  render() {
    const { productInfo } = this.state;
    return (
      <>
        <Header />
        <section className="product-detail" style={{ background: "#F3F5FB" }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 product-image">
                <div
                  id="carousel-thumb"
                  className="carousel slide carousel-fade carousel-thumbnails"
                  data-ride="carousel"
                >
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="http://res.cloudinary.com/blueburyfbd/image/upload/v1597417815/n5zwxm9ik2zyv8wys8yz.jpg"
                        alt="Second slide"
                      />
                    </div>
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src="http://res.cloudinary.com/blueburyfbd/image/upload/v1597417824/qpr4ojkhru7e3bklqzhg.jpg"
                        alt="Second slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="http://res.cloudinary.com/blueburyfbd/image/upload/v1597417835/hjazrwi1xnx9otbczzj0.jpg"
                        alt="Second slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="http://res.cloudinary.com/blueburyfbd/image/upload/v1597417848/klsiv8hgcswzif25rit0.jpg"
                        alt="Second slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="http://res.cloudinary.com/blueburyfbd/image/upload/v1597417868/kbxz6tjpcjrfrbjnjbmb.jpg"
                        alt="Second slide"
                      />
                    </div>{" "}
                  </div>

                  <Link
                    className="carousel-control-prev"
                    to={"#carousel-thumb"}
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </Link>
                  <Link
                    className="carousel-control-next"
                    to={"#carousel-thumb"}
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </Link>

                  <ol
                    className="carousel-indicators"
                    style={{ position: "unset", paddingTop: "1rem" }}
                  >
                    <li
                      data-target="#carousel-thumb"
                      data-slide-to="0"
                      className=""
                    >
                      <img
                        className="d-block w-100"
                        src="http://res.cloudinary.com/blueburyfbd/image/upload/v1597417815/n5zwxm9ik2zyv8wys8yz.jpg"
                        alt={"pinterest"}
                      />
                    </li>
                    <li
                      data-target="#carousel-thumb"
                      data-slide-to="1"
                      className="active"
                    >
                      <img
                        className="d-block w-100"
                        src="http://res.cloudinary.com/blueburyfbd/image/upload/v1597417824/qpr4ojkhru7e3bklqzhg.jpg"
                        alt={"pinterest"}
                      />
                    </li>
                    <li
                      data-target="#carousel-thumb"
                      data-slide-to="2"
                      className=""
                    >
                      <img
                        className="d-block w-100"
                        src="http://res.cloudinary.com/blueburyfbd/image/upload/v1597417835/hjazrwi1xnx9otbczzj0.jpg"
                        alt={"pinterest"}
                      />
                    </li>
                    <li
                      data-target="#carousel-thumb"
                      data-slide-to="3"
                      className=""
                    >
                      <img
                        className="d-block w-100"
                        src="http://res.cloudinary.com/blueburyfbd/image/upload/v1597417848/klsiv8hgcswzif25rit0.jpg"
                        alt={"pinterest"}
                      />
                    </li>
                    <li
                      data-target="#carousel-thumb"
                      data-slide-to="4"
                      className=""
                    >
                      <img
                        className="d-block w-100"
                        src="http://res.cloudinary.com/blueburyfbd/image/upload/v1597417868/kbxz6tjpcjrfrbjnjbmb.jpg"
                        alt={"pinterest"}
                      />
                    </li>
                  </ol>
                </div>
              </div>

              <div className="col-sm-6 product-info">
                <div className="row">
                  <div className="col-sm-12">
                    <span className="badge badge-pill badge-bg">37% off</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <span style={{ fontSize: "1.5rem" }}>
                      {productInfo.productName}
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <span style={{ fontSize: "1.2rem" }}>
                      Brand : {productInfo.brandName}{" "}
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <span style={{ fontSize: "1.2rem" }}>
                      Color : <span className="colorDot"></span>
                      <span style={{ paddingLeft: "1rem" }}>Black</span>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <span style={{ fontSize: "1.2rem" }}>
                      Selling price :{" "}
                      <img
                        src="https://mobatic.sidereal.in/shopping/images/rupee.png"
                        alt={"pinterest"}
                      />{" "}
                      {productInfo.sellingPrice}{" "}
                    </span>
                    <br />
                    <span style={{ fontSize: "1rem" }}>
                      (Inclusive of all taxes){" "}
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <span>Size Available in: </span>
                    <br />
                  </div>
                </div>
                <div className="row size-list">
                  <div className="col-sm-12">
                    <label className="active">
                      <Link
                        to={"/test"}
                        target="_blank"
                        style={{ marginRight: "0.5rem" }}
                      >
                        M Size
                      </Link>
                    </label>
                    <label>
                      <Link
                        to={"/test"}
                        target="_blank"
                        style={{ marginRight: "0.5rem" }}
                      >
                        L Size
                      </Link>
                    </label>
                    <label>
                      <Link
                        to={
                          "https://mobatic.sidereal.in/shopping/product_detail?id=108"
                        }
                        target="_blank"
                        style={{ marginRight: "0.5rem" }}
                      >
                        XL Size
                      </Link>
                    </label>
                    <label>
                      <Link
                        to={
                          "https://mobatic.sidereal.in/shopping/product_detail?id=109"
                        }
                        target="_blank"
                        style={{ marginRight: "0.5rem" }}
                      >
                        XXL Size
                      </Link>
                    </label>
                    <label>
                      <Link
                        to={
                          "https://mobatic.sidereal.in/shopping/product_detail?id=100"
                        }
                        target="_blank"
                        style={{ marginRight: "0.5rem" }}
                      >
                        XXXL Size
                      </Link>
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <span>Color Available in: </span>
                    <br />
                  </div>
                </div>
                <div className="row color-options">
                  <div className="col-sm-12">
                    <label className="black">
                      <Link
                        to={
                          "https://mobatic.sidereal.in/shopping/product_detail?id=100"
                        }
                        target="_blank"
                        style={{ marginRight: "0.5rem" }}
                      >
                        Black
                      </Link>
                    </label>
                  </div>
                </div>
                <ProductCount data={productInfo} pageName={"individualProduct"}/>                
              </div>
            </div>

            <div className="row product-specs">
              <div className="col-sm-6">
                <h4>Product Details</h4>
                <p>Product Name : {productInfo.productName} </p>
                <p>Unit : {productInfo.productUnit} </p>
                <p>Manufacturer : {productInfo.brandName}</p>
                <p>
                  Color :&nbsp;
                  <span className="colorDot"></span>
                  <span style={{ paddingLeft: "0.5rem" }}>Black</span>{" "}
                </p>
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
  searchProductList
};
export default connect(mapState, mapDispatch)(ProductDetail);