import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="https://cdn.luxstay.com/home/location/location_5_1559735011.png" alt=""/>
          </div>
          <div>
          <img src="https://cdn.luxstay.com/home/location/location_16_1559303173.png" alt=""/>

          </div>
          <div>
          <img src="https://cdn.luxstay.com/home/location/location_10_1559303118.png" alt=""/>

          </div>
          <div>
          <img src="https://cdn.luxstay.com/home/location/location_4_1559786177.png" alt=""/>

          </div>
          <div>
          <img src="https://cdn.luxstay.com/home/location/location_1_1559373089.png" alt=""/>

          </div>

          <div>
        
          </div>
        </Slider>
      </div>
    );
  }
}