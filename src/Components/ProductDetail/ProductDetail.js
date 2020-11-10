/**
|--------------------------------------------------
| Import React core components
|--------------------------------------------------
*/
import React, { Component } from "react";
import { connect } from "react-redux";

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
import CarouselComponent from './Carousel';

/**
|--------------------------------------------------
| Import Api helper files
|--------------------------------------------------
*/
import { apiDomain, productDetailMethod } from "../../Api/helper";
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
import "./ProductDetail.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
  const { match } = this.props;
  const productId = match && match.params && match.params.id ? match.params.id : 1
  const requestUrl = apiDomain + productDetailMethod;
  const store_id = localStorage.getItem("storeId");
  const product_id = productId;
  const inputData = {
    mod: "GET_DETAIL",
    data_arr: {
      store_id,
      product_id
    },
  };
    this.setState({ loading: true });
    let productInfo;
    const { data } = await postApi(requestUrl, inputData);
    if (data && data.data && data.data.success) {
      productInfo = await this.constructApiData(data.data);
      this.constructApiData(data);
    } else {
      // alert(error);
      const response = sampleApi.data;
      productInfo = await this.constructApiData(response);
  }
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
      offer: Number(productInfo.mrp) - Number(productInfo.purchase_price),
      productId: productInfo.product_id,
      productImage: selectedImage,
      productName: productInfo.product_name,
      productUnit: productInfo.unit,
      sellingPrice: productInfo.sell_price,
      actualPrice: productInfo.purchase_price,
      availableCount: productInfo.quantity,
      brandName: productInfo.brand_name,
      imageArray: data.success.pro_image
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
              <CarouselComponent imageList={productInfo.imageArray} />                
              </div>

              <div className="col-sm-6 product-info">
                {productInfo.offer > 0 && <div className="row">
                  <div className="col-sm-12">
                    <span className="badge badge-pill badge-bg">{productInfo.offer}% off</span>
                  </div>
                </div>}
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
                {/* <div className="row">
                  <div className="col-sm-12">
                    <span style={{ fontSize: "1.2rem" }}>
                      Color : <span className="colorDot"></span>
                      <span style={{ paddingLeft: "1rem" }}>Black</span>
                    </span>
                  </div>
                </div> */}
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
                {/* <div className="row">
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
                </div> */}
                <ProductCount data={productInfo} pageName={"individualProduct"}/>                
              </div>
            </div>

            <div className="row product-specs">
              <div className="col-sm-6">
                <h4>Product Details</h4>
                <p>Product Name : {productInfo.productName} </p>
                <p>Unit : {productInfo.productUnit} </p>
                <p>Manufacturer : {productInfo.brandName}</p>
                {/* <p>
                  Color :&nbsp;
                  <span className="colorDot"></span>
                  <span style={{ paddingLeft: "0.5rem" }}>Black</span>{" "}
                </p> */}
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