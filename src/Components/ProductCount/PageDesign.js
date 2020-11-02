import React, { Component } from "react";

export class PageDesign extends Component {
  render() {
    const { pageName, className, children, key } = this.props;
    if (pageName === "cart") {
      return <div className={className} key={key}>{children}</div>;
    }
    return <React.Fragment key={key}>{children}</React.Fragment>;
  }
}

export default PageDesign;
