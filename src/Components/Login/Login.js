/**
|--------------------------------------------------
| Import React core components
|--------------------------------------------------
*/

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

/**
|--------------------------------------------------
| Import path to be use for redirection dynamically
|--------------------------------------------------
*/
import WebPath from "../../Routes/WebPath";

/**
|--------------------------------------------------
| Import Api helper files
|--------------------------------------------------
*/
import { loginMethod, apiDomain } from "../../Api/helper";
import { postApi } from "../../Api";

/**
|--------------------------------------------------
| Import component files
|--------------------------------------------------
*/
// Header component
import Header from "../Header";

/**
|--------------------------------------------------
| Redirection helper component
|--------------------------------------------------
*/

import { history } from "../../Routes/history";

/**
|--------------------------------------------------
| Validation component
|--------------------------------------------------
*/

import { validate, formValid, checkValidMobile } from "../../Helper/validation";

/**
|--------------------------------------------------
| Import css file which uses for this component
|--------------------------------------------------
*/

import "./Login.css";

/**
|--------------------------------------------------
| Rendering Class components
|--------------------------------------------------
*/

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {},
      errors: {},
      otpReceived: false,
      loading: false,
    };
  }

  handleChange = (e) => {
    let { values, errors } = this.state;
    let { name, value } = e.target;
    values = { ...values, [name]: value };
    errors = value !== "" ? { ...errors, [name]: "" } : errors;
    let otpReceived =
      checkValidMobile(values.custLoginMobile) === "" ? true : false;
    this.setState({ values, errors, otpReceived });
  };

  handleSubmit = async (e) => {
    let { values, errors, loading } = this.state;
    const {
      state: { selectedList },
    } = this.props;
    e.preventDefault();
    errors = validate("loginForm", values);
    if (formValid(errors)) {
      this.setState({ loading: true });
      const requestUrl = apiDomain + loginMethod;
      const inputData = {
        mod: "CUSTOMER_LOGIN",
        data_arr: {
          username: values.custLoginMobile,
        },
      };
      const { data, error } = await postApi(requestUrl, inputData);
      if (data) {
        localStorage.setItem("login", true);
        if (selectedList && selectedList.length > 0) {
          history.push(WebPath.OrderCart);
        } else {
          history.push(WebPath.Home);
        }
      } else {
        alert(error);
      }
    }
    loading = false;
    this.setState({ errors, loading });
  };

  render() {
    const { values, errors, otpReceived, loading } = this.state;
    if (localStorage.getItem("login") && localStorage.getItem("login") !== "")
      return <Redirect to={WebPath.Home} />;
    return (
      <>
        <Header />
        <section
          style={{ paddingTop: "3rem" }}
          className="bg-section-secondary slice"
        >
          <div
            className="container"
            style={{
              paddingRight: "0",
              paddingLeft: "0",
              marginLeft: "0",
              marginRight: "0",
            }}
          >
            <form onSubmit={this.handleSubmit}>
              <div
                id="loginDivContent"
                style={{ paddingLeft: "10px", paddingRight: "10px" }}
              >
                <input
                  type="hidden"
                  className="form-control"
                  id="country_code"
                  value="+91"
                />
                <br />

                <input
                  type="number"
                  className="form-control"
                  id="custLoginMobile"
                  name="custLoginMobile"
                  placeholder="Enter Your Mobile Number"
                  value={values.custLoginMobile || ""}
                  onChange={(e) => this.handleChange(e)}
                  autoComplete="off"
                />
                {errors && errors.custLoginMobile && (
                  <span id="custLoginMobile_EBox" style={{ color: "red" }}>
                    {errors.custLoginMobile}
                  </span>
                )}
                {otpReceived && (
                  <input
                    type="number"
                    className="form-control"
                    id="custLoginOtp"
                    onChange={(e) => this.handleChange(e)}
                    name="custLoginOtp"
                    placeholder="Enter OTP"
                    style={{ marginTop: "1rem" }}
                  ></input>
                )}
                {otpReceived && errors && errors.custLoginOtp && (
                  <span id="custLoginMobile_EBox" style={{ color: "red" }}>
                    {errors.custLoginOtp}
                  </span>
                )}
                <br />
                <button
                  className={
                    otpReceived
                      ? "btn btn-success col50 button"
                      : "form-control btn btn-success button"
                  }
                  type="submit"
                  style={{ marginTop: "1rem" }}
                  disabled={loading}
                >
                  {loading && (
                    <i
                      className="fa fa-refresh fa-spin"
                      style={{ marginRight: "5px" }}
                    />
                  )}
                  {loading
                    ? "Loading"
                    : otpReceived
                    ? "Submit"
                    : "Login via SMS"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}

const mapState = (state) => ({
  state: state.productReducer,
});
const mapDispatch = {};
export default connect(mapState, mapDispatch)(Login);
