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

/**
|--------------------------------------------------
| Import folder path 
|--------------------------------------------------
*/
import { imagePath } from "../../Api/helper";
import PageDesign from "./PageDesign";
import PageBodyDesign from "./PageBodyDesign";

/**
|--------------------------------------------------
| Import css file
|--------------------------------------------------
*/
import "./ProductCount.css";

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

class ProductCount extends Component {
  // Individual count product function
  countProduct = ({ countValue, data, countLabel }) => {
    const { storeSelectList } = this.props;

    let selectedList = JSON.parse(localStorage.getItem("selectedList"));
    selectedList = selectedList && selectedList.length > 0 ? selectedList : [];

    // Which functionality to integrate - add / sub
    countValue = countLabel === "addCount" ? countValue + 1 : countValue - 1;

    if (countValue > Number(data.availableCount)) {
      return true;
    }
    // Count will be zero only at subtract product
    if (countValue === 0) {
      data.selectedCount = 0;
      selectedList = selectedList.filter(
        (item) => item.productId !== data.productId
      );
      selectedList = JSON.stringify(selectedList);
    } else {
      // If data exist overwrite count value
      data.selectedCount = countValue;
      data.individualPrice = countValue * data.sellingPrice;
      const selectedIndex =
        selectedList &&
        selectedList.length > 0 &&
        selectedList.findIndex((item) => item.productId === data.productId);
      if (selectedList && selectedList.length > 0 && selectedIndex > -1) {
        selectedList[selectedIndex].selectedCount = countValue;
        selectedList[selectedIndex].individualPrice =
          countValue * selectedList[selectedIndex].sellingPrice;
        selectedList = JSON.stringify(selectedList);
      } else {
        selectedList = JSON.stringify([...selectedList, data]);
      }
    }
    localStorage.setItem("selectedList", selectedList); // update values in localstorage

    //Add subtotal amount
    selectedList = JSON.parse(selectedList);
    const subtotal =
      selectedList && selectedList.length > 0
        ? selectedList.reduce(
            (accumulator, pilot) => accumulator + pilot.individualPrice,
            0
          )
        : 0;
    storeSelectList(selectedList, subtotal); // update values in reducer
  };

  render() {
    const { data, pageName, className, key } = this.props;
    const countValue = data && data.selectedCount ? data.selectedCount : 0;
    return (
      <div className="col-lg-12" id="storeProCart_127" key={key}>
        <PageBodyDesign
          className="mb-2"
          style={{ textAlign: "center" }}
          pageName={pageName}
        >
          {(!countValue || countValue === 0) &&
            pageName !== "individualProduct" && (
              <span
                className="badge badge-pill badge-lg"
                style={{
                  color: "#3D3D42",
                  backgroundColor: "#e4eaf4",
                  float: "right",
                  width: "100%",
                  padding: "0.5rem 0rem",
                  cursor: "pointer",
                }}
                onClick={() =>
                  this.countProduct({
                    countValue,
                    data,
                    countLabel: "addCount",
                  })
                }
              >
                Add To Cart
              </span>
            )}
          {(!countValue || countValue === 0) &&
            pageName === "individualProduct" && (
              <div className="row">
                <div className="col-sm-12">
                  <button
                    className="btn btn-primary"
                    style={{
                      cursor: "pointer",
                      marginLeft: "-16px"
                    }}
                    onClick={() =>
                      this.countProduct({
                        countValue,
                        data,
                        countLabel: "addCount",
                      })
                    }
                  >
                    {" "}
                    Add to Cart
                  </button>
                </div>
              </div>
            )}
          {countValue > 0 && (
            <>
              <PageDesign pageName={pageName} className={className} key={key}>
                <span>
                  <img
                    src={`${PUBLIC_URL}${imagePath}/minus_icon.png`}
                    style={{ height: "2rem", cursor: "pointer" }}
                    alt={"minus_icon"}
                    onClick={() =>
                      this.countProduct({
                        countValue,
                        data,
                        countLabel: "removeCount",
                      })
                    }
                  />
                </span>
              </PageDesign>
              <PageDesign pageName={pageName} className={className} key={key}>
                <span
                  style={{
                    color: "#3D3D42",
                    fontSize: "1rem",
                    padding: "0.85em 1.375em",
                  }}
                >
                  {countValue}
                </span>
              </PageDesign>
              <PageDesign pageName={pageName} className={className} key={key}>
                <span>
                  <img
                    src={`${PUBLIC_URL}${imagePath}/plus_icon.png`}
                    style={{ height: "2rem", cursor: "pointer" }}
                    alt={"plus_icon"}
                    onClick={() =>
                      this.countProduct({
                        countValue,
                        data,
                        countLabel: "addCount",
                      })
                    }
                  />
                </span>
              </PageDesign>
            </>
          )}
        </PageBodyDesign>
      </div>
    );
  }
}

const mapState = (state) => ({
  state: state.productReducer,
});
const mapDispatch = {
  storeSelectList,
};
export default connect(mapState, mapDispatch)(ProductCount);
