import React from 'react';
import { Carousel } from 'react-bootstrap';
import headerBg from '../../Images/headerBg.jpg';

const Header = () => {
   return (
      <div>
         <h1>This is header</h1>
         <Carousel>
            <Carousel.Item className="header-container">
               <img
                  className="d-block w-100 header-image"
                  src={headerBg}
                  alt="First slide"
               />

               {/* <h3>
                  Chossing a <br /> Financial Advisor
               </h3> */}

               <Carousel.Caption>
                  <h3>
                     Chossing a <br /> Financial Advisor
                  </h3>
                  <p>
                     Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="header-container">
               <img
                  className="d-block w-100 header-image"
                  src={headerBg}
                  alt="Second slide"
               />
               <h3>
                  Chossing a <br /> Financial Advisor
               </h3>
               <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="header-container">
               <img
                  className="d-block w-100 header-image"
                  src={headerBg}
                  alt="Third slide"
               />
               <h3>
                  Chossing a <br /> Financial Advisor
               </h3>
               <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                     Praesent commodo cursus magna, vel scelerisque nisl
                     consectetur.
                  </p>
               </Carousel.Caption>
            </Carousel.Item>
         </Carousel>
      </div>
   );
};

export default Header;
