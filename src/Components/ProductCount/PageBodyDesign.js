import React, { Component } from "react";

export class PageBodyDesign extends Component {
  render() {
    const { pageName, className, children, key, style } = this.props;
    if (pageName === "productList") {
      return <p className={className} key={key} style={style}>{children}</p>;
    }
    return <>{children}</>;
  }
}

export default PageBodyDesign;
