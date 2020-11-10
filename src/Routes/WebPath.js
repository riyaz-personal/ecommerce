const WebPath = {
  Home: "/",
  Privacy: "/privacy",
  Terms: "/terms",
  ProductList: "/store/",
  ProductDetail: "/product/",
  OrderCart: "/order",
  Login: "/login",
  OrderList: "/order-list",
  OrderProcess: "/order-process",
  OrderThanks: "/order-thanks",

  // Reuse routes path
  get ProductListId() {
    return this.ProductList + ":id";
  },
  get ProductDetailId() {
    return this.ProductDetail + ":id";
  },
};
export default WebPath;
