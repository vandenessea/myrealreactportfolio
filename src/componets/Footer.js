//import React from 'react';
//import { left } from '@popperjs/core';
import React from "react";
//import { Card } from "react-bootstrap";
//import Carousel from './Carousel';

//import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

function footer(className) {
  return (
    <Card.Footer className= {className} >
      <h2>Made with 💻 by Alexander Vandenesse</h2>
      <p>&copy; 2021 Proflomance Coding Solutions, Inc.</p>
    </Card.Footer>
  );
}

export default footer;
