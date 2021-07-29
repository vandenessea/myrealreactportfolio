//import React from 'react';
//import { left } from '@popperjs/core';
import React from "react";
// import Carousel from '../Images/Blue.jpg';

//import Container from 'react-bootstrap/Container'
import Card from "react-bootstrap/Card";
//import NavDropdown from 'react-bootstrap/NavDropdown'
//import container from bootstrp react, NavDropdown
//import Nav from 'react-bootstrap/Nav'
//import Blue.jpg from './MoreImages/Blue.jpg'
//import '';

// <img
//         className="d-block w-100 " width="700px" height="700px"
//         src={Cyberdyne}
//         alt="Body slide"
//       />

function card({ className }) {
  return (
    <Card
      className={className}
      style={{
        width: "25rem",
        color: "white",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Card.Body
        style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <Card.Title>Alexander Vandenesse</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Full Stack Web Developer
        </Card.Subtitle>
        <Card.Img src={process.env.PUBLIC_URL + "/MoreImages/Blue.jpg"} />

        <Card.Link href="https://epurpur.github.io/NationalParkService/">
          Project 1
        </Card.Link>
        <Card.Link href="https://whispering-harbor-84238.herokuapp.com/login">
          Project 2
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default card;
