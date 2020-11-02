import React, { Component } from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";

/**
|--------------------------------------------------
| Redirection helper component
|--------------------------------------------------
*/

import { history } from './history';

/**
|--------------------------------------------------
| Import all routes component file
|--------------------------------------------------
*/


import AllRoutes from "./AllRoutes";

/**
|--------------------------------------------------
| Import component file
|--------------------------------------------------
*/

import StickyFooter from "../Components/StickyFooter";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router history={history}>
          <Route component={ScrollToTop} />
          <AllRoutes />
          <Route component={StickyFooter} />
        </Router>
      </BrowserRouter>
    );
  }
}

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

export default App;
