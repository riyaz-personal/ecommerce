/**
|--------------------------------------------------
| Import path files
|--------------------------------------------------
*/

import WebPath from "./WebPath";

/**
|--------------------------------------------------
| Import component files
|--------------------------------------------------
*/

import Home from "../Components/Home";
import Terms from "../Components/Terms";
import Login from "../Components/Login";
import Privacy from "../Components/Privacy";
import OrderCart from "../Components/OrderCart";
import OrderList from "../Components/OrderList";
import ProductList from "../Components/ProductList";
import OrderProcess from "../Components/OrderProcess";
import ProductDetail from "../Components/ProductDetail";
import OrderThanks from "../Components/OrderThanks";

const WebRoutes = [
  {
    path: WebPath.Home,
    component: Home,
    exact: true,
    auth: false,
  },
  {
    path: WebPath.Privacy,
    component: Privacy,
    exact: true,
    auth: false,
  },
  {
    path: WebPath.Terms,
    component: Terms,
    exact: true,
    auth: false,
  },
  {
    path: WebPath.ProductListId,
    component: ProductList,
    exact: true,
    auth: false,
  },
  {
    path: WebPath.Login,
    component: Login,
    exact: true,
    auth: false,
  },
  {
    path: WebPath.ProductDetailId,
    component: ProductDetail,
    exact: true,
    auth: false,
  },
  {
    path: WebPath.OrderCart,
    component: OrderCart,
    exact: true,
    auth: true,
  },
  {
    path: WebPath.OrderProcess,
    component: OrderProcess,
    exact: true,
    auth: true,
  },
  {
    path: WebPath.OrderList,
    component: OrderList,
    exact: true,
    auth: true,
  },
  {
    path: WebPath.OrderThanks,
    component: OrderThanks,
    exact: true,
    auth: true,
  }
];

export default WebRoutes;
