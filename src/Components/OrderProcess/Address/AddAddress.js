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
import { currentOrderProcess } from "../../../Actions/orderProcess";

/**
|--------------------------------------------------
| Import path to be use for redirection dynamically
|--------------------------------------------------
*/
// import WebPath from "../../../Routes/WebPath";

/**
|--------------------------------------------------
| Redirection helper component
|--------------------------------------------------
*/
// import { history } from "../../../Routes/history";

/**
|--------------------------------------------------
| Validation component
|--------------------------------------------------
*/
import {
  validate,
  formValid,
  // checkValidMobile,
} from "../../../Helper/validation";

/**
|--------------------------------------------------
| Rendering Class components
|--------------------------------------------------
*/

class AddAddress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {},
      errors: {},
      loading: false,
    };
  }

  handleChange = (e) => {
    let { values, errors } = this.state;
    let { name, value } = e.target;
    values = { ...values, [name]: value };
    errors = value !== "" ? { ...errors, [name]: "" } : errors;
    this.setState({ values, errors });
  };

  handleSubmit = async (e) => {
    let { values, errors, loading } = this.state;
    const { currentOrderProcess } = this.props;
    // const {
    //   state: { selectedList },
    // } = this.props;
    e.preventDefault();
    errors = validate("addressForm", values);
    if (formValid(errors)) {
      this.setState({ loading: true });
      currentOrderProcess("openListAddress");
      // const requestUrl = apiDomain + loginMethod;
      // const inputData = { name: "test", salary: "123", age: "23" };
      // const { data, error } = await postApi(requestUrl, inputData);
      // if (data) {
      // localStorage.setItem("login", true);
      // if (selectedList && selectedList.length > 0) {
      //   history.push(WebPath.OrderCart);
      // } else {
      //   history.push(WebPath.Home);
      // }
      // } else {
      //   alert(error);
      // }
    }
    loading = false;
    this.setState({ errors, loading });
  };

  render() {
    const { values, errors } = this.state;

    return (
      <>
      <section  style={{paddingTop: "0rem", paddingBottom: "1rem"}} className="bg-section-secondary">
      <div className="container" style={{paddingRight: "0", paddingLeft: "0", marginLeft: "0", marginRight: "0"}}>
      <div id="newAddressDivContent">
        <div
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            marginBottom: "6rem",
          }}
        >
          <p style={{ marginBottom: "0" }}>Address Title *</p>
          <select
            id="addressTitle"
            name="addressTitle"
            className="form-control"
            value={values.addressTitle || ""}
            onChange={(e) => this.handleChange(e)}
          >
            <option value=""> Select Address Title *</option>
            <option value="Home"> Home</option>
            <option value="Office"> Office</option>
            <option value="Other"> Other</option>
          </select>
          {errors && errors.addressTitle && (
            <span id="addressTitle_EBox" style={{ color: "red" }}>
              {errors.addressTitle}
            </span>
          )}

          <p style={{ marginBottom: "0" }}>Address *</p>
          <input
            type="text"
            id="custAddress"
            name="custAddress"
            className="form-control"
            placeholder="Enter Your Address"
            autoComplete="off"
            value={values.custAddress || ""}
            onChange={(e) => this.handleChange(e)}
          />
          {errors && errors.custAddress !== "" && (
            <span id="custAddress_EBox" style={{ color: "red" }}>
              {errors.custAddress}
            </span>
          )}

          <p style={{ marginBottom: "0" }}>Landmark</p>
          <input
            type="text"
            id="custLandmark"
            name="custLandmark"
            className="form-control"
            placeholder="Enter Landmark If Any"
            autoComplete="off"
            value={values.custLandmark || ""}
            onChange={(e) => this.handleChange(e)}
          />
          <span id="custLandmark_EBox" style={{ color: "red" }}></span>

          <p style={{ marginBottom: "0" }}>Area Name *</p>
          <input
            type="text"
            id="custArea"
            name="custArea"
            className="form-control"
            placeholder="Enter Area Name"
            autoComplete="off"
            value={values.custArea || ""}
            onChange={(e) => this.handleChange(e)}
          />
          {errors && errors.custArea !== "" && (
            <span id="custArea_EBox" style={{ color: "red" }}>
              {errors.custArea}
            </span>
          )}

          <p style={{ marginBottom: "0" }}>City Name *</p>
          <input
            type="text"
            id="custCity"
            name="custCity"
            className="form-control"
            placeholder="Enter City Name"
            autoComplete="off"
            value={values.custCity || ""}
            onChange={(e) => this.handleChange(e)}
          />
          {errors && errors.custCity !== "" && (
            <span id="custCity_EBox" style={{ color: "red" }}>
              {errors.custCity}
            </span>
          )}

          <p style={{ marginBottom: "0" }}>State Name *</p>
          <input
            type="text"
            id="custState"
            name="custState"
            className="form-control"
            placeholder="Enter State Name"
            autoComplete="off"
            value={values.custState || ""}
            onChange={(e) => this.handleChange(e)}
          />
          {errors && errors.custState !== "" && (
            <span id="custState_EBox" style={{ color: "red" }}>
              {errors.custState}
            </span>
          )}

          <p style={{ marginBottom: "0" }}>Country Name *</p>
          <input
            type="text"
            id="custCountry"
            name="custCountry"
            className="form-control"
            placeholder="Enter Country Name"
            autoComplete="off"
            value={values.custCountry || ""}
            onChange={(e) => this.handleChange(e)}
          />
          {errors && errors.custCountry !== "" && (
            <span id="custCountry_EBox" style={{ color: "red" }}>
              {errors.custCountry}
            </span>
          )}

          <p style={{ marginBottom: "0" }}>Pincode Name *</p>
          <input
            type="text"
            id="custPincode"
            name="custPincode"
            className="form-control"
            placeholder="Enter Pincode"
            autoComplete="off"
            value={values.custPincode || ""}
            onChange={(e) => this.handleChange(e)}
          />
          {errors && errors.custPincode !== "" && (
            <span id="custPincode_EBox" style={{ color: "red" }}>
              {errors.custPincode}
            </span>
          )}
        </div>

        <div
          className="row"
          style={{
            margin: "0rem",
            bottom: "6.5%",
            position: "fixed",
            width: "100%",
          }}
        >
          <div className="col-12 btn btn-success" onClick={(e) => this.handleSubmit(e)}>
            <span style={{ textAlign: "center", fontSize: "1.2rem" }}>
              Add Address
            </span>
          </div>
        </div>
      </div>
      </div>
      </section>
      </>

    );
  }
}

const mapState = (state) => ({
  state: state.orderReducer,
});
const mapDispatch = {
  currentOrderProcess,
};
export default connect(mapState, mapDispatch)(AddAddress);