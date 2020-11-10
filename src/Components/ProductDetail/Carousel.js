import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";

class CarouselComponent extends Component {
  render() {
    const { imageList } = this.props;
    return (
      <Carousel autoPlay>
        {imageList &&
          imageList.length > 0 &&
          imageList.map((item, index) => {
            return (
              <div key={index}>
                <img alt="" src={item} />
              </div>
            );
          })}
      </Carousel>
    );
  }
}
export default CarouselComponent;
