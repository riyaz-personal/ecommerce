import React, { Component } from "react";
import "./Banner.css";

export class Banner extends Component {
  render() {
    const { title } = this.props;
    return (
      <>
        <section
          className="slice  bg-gradient-primary"
          data-offset-top="#header-main"
          style={{background: "linear-gradient(50deg, #0593FF 0,#057DD8 100%)", paddingTop: "118px"}}
        >
          <div className="container py-4  d-flex align-items-center position-relative zindex-100">
            <div className="col">
              <div className="row">
                <div className="col-lg-12">
                  <div className="text-center text_center pb-5">
                    <h1 className="h1 text-white mb-4">{title}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Banner;
