import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/portada2.jpg';
import img2 from '../img/portada3.jpg';
import img3 from '../img/portada4.jpg';

class Sliderr extends Component{
    render(){
    return(
        <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100 h-50" src={img1} alt="First slide"  />
        <Carousel.Caption>
          <h3>Helados Huastecos</h3>
          <p>Un buen momento para todos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 h-50"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Helados Huastecos</h3>
          <p>Un buen momento para todos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3>Helados Huastecos</h3>
          <p>Un buen momento para todos.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )      
  }
}

export default Sliderr;
