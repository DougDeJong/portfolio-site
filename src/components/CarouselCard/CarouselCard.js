import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class CarouselCard extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="https://media.contentapi.ea.com/content/dam/ea/game-changers/common/game-changers-logo-hero-large.png" alt='GC'/>
          <p className="legend">Gamechanger 1</p>
        </div>
        <div>
          <img src="https://www.guitarplayer.com/.image/t_share/MTUxNDE4MTAwMDI3MzAzMTY3/image-placeholder-title.jpg" alt="guitar" />
          <p className="legend">Musician 2</p>
        </div>

        <div>

        </div>


      </Carousel>
    )
  }
}

export default CarouselCard;