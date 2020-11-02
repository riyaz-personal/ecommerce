export function validate(formName, data) {
  let errors = {};
  switch (formName) {
    case "loginForm":
      errors.custLoginMobile = ((!data.custLoginMobile) ||  (data && data.custLoginMobile.trim() === "")) ? "Enter Valid Mobile Number" : checkValidMobile(data.custLoginMobile);
      errors.custLoginOtp = (data.custLoginMobile && checkValidMobile(data.custLoginMobile) === "") && !data.custLoginOtp ? "Enter OTP" : ""
      break;
    case "addressForm":
      errors.addressTitle = !data.addressTitle ? "Please Select Address Title" : "";
      errors.custAddress = ((!data.custAddress) ||  (data && data.custAddress.trim() === "")) ? "Please Enter Your Address" : "";
      errors.custArea = ((!data.custArea) ||  (data && data.custArea.trim() === "")) ? "Please Enter Your Area Name" : "";
      errors.custCity = ((!data.custCity) ||  (data && data.custCity.trim() === "")) ? "Please Enter Your City Name" : "";
      errors.custState = ((!data.custState) ||  (data && data.custState.trim() === "")) ? "Please Enter Your State Name" : "";
      errors.custCountry = ((!data.custCountry) ||  (data && data.custCountry.trim() === "")) ? "Please Enter Your Country Name" : "";
      errors.custPincode = ((!data.custPincode) ||  (data && data.custPincode.trim() === "")) ? "Please Enter Your Pincode" : "";
      break;
    default:
  }
  return errors;
}

export function formValid(data) {
  let valid = true;
  Object.values(data) &&
    Object.values(data).forEach(val => val !== "" && (valid = false));
  return valid;
}

export function checkValidMobile(data){
  const pattern = /^\d{10}$/;
  return pattern.test(data) ? "" :"Mobile must have 10 digits";
}