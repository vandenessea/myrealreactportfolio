//import React from 'react';
import React from "react";
//import Carousel from './Carousel';

import Carousel from "react-bootstrap/Carousel";
import Lightboxes from "../Images/Lightboxes.jpg";
import Neurons from "../Images/Neurons.png";
import Cyberdyne from "../Images/Cyberdyne.jpg";
//import Card from '../componets/Card'

function carousel() {
  return (
    <Carousel>
      <Carousel.Item interval={6000}>
        <img
          className="d-block w-100 "
          width="700px"
          height="700px"
          src={Cyberdyne}
          alt="Body slide"
        />
        <Carousel.Caption>
          <button
            style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            onClick={() =>
              window.open("https://github.com/vandenessea")
            }
          >
            About Me?
          </button>
          <p>Who am I? What do i do?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <img
          className="d-block w-100 "
          width="700px"
          height="700px"
          src={Lightboxes}
          alt="Second slide"
        />
        <Carousel.Caption>
          <button
            style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            onClick={() =>
              window.open("https://github.com/vandenessea")
            }
          >
            About Me?
          </button>
          <p>Links of best work</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <img
          className="d-block w-100 "
          width="700px"
          height="700px"
          src={Neurons}
          alt="Third slide"
        />
        <Carousel.Caption>
          <button
            style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            onClick={() =>
              window.open("https://github.com/vandenessea")
            }
          >
            About Me?
          </button>
          <p>Do yewr best!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default carousel;
