const WebPath = {
  Home: "/",
  Privacy: "/privacy",
  Terms: "/terms",
  ProductList: "/store/",
  ProductDetail: "/product",
  OrderCart: "/order",
  Login: "/login",
  OrderList: "/order-list",
  OrderProcess: "/order-process",
  OrderThanks: "/order-thanks",

  // Reuse routes path
  get ProductListId() {
    return this.ProductList + ":id";
  },
};
export default WebPath;
