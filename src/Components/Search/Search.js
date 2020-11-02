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
import { searchProductList } from "../../Actions/productList";

/**
|--------------------------------------------------
| Import css file
|--------------------------------------------------
*/
import "./Search.css";

/**
|--------------------------------------------------
| Rendering Class components
|--------------------------------------------------
*/
class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchData: [],
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    const { allProducts, searchProductList } = this.props;
    const { value } = e.target;
    const regex = new RegExp(value, 'i');    
    const selectedProduct = allProducts.filter((item) => regex.test(item.productName));
    searchProductList(selectedProduct);
  };

  render() {
    return (
      <>
        <input
          id="myInput"
          type="text"
          placeholder="Product Search..."
          className="search_bar"
          onChange={(e) => this.handleChange(e)}
        />
      </>
    );
  }
}

const mapState = () => ({});
const mapDispatch = {
  searchProductList,
};
export default connect(mapState, mapDispatch)(Search);
