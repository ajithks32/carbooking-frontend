import React from 'react';
import './About.css';
import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import c1 from '../image/image1.jpg';
import c2 from '../image/c2.jpg';
import backgroundImage from '../image/backgroundImage.jpg';
import image1 from '../image/c1.jpg';
import icon from '../image/icon.jpg';
import track from '../image/track.jpg';
import route from '../image/route.jpg';


const About = () => {
  return(
    <div className="container_fluid p-0">
      <div className="car_background">
        <div className="overlay_text">
          <h1>About Us</h1>
          <p>Home / About Us</p>
        </div>
      </div>
      <div className="row">
        {/* Image Column */}
        <div className="image_column">
        {/* Displaying three images */}
        <div className="image_item">
          <img src={c1} alt="" className="image1" />
        </div>
        <div className="image_item">
          <img src={c2} alt="" className="image2" />
        </div>
        </div>
        {/* Content Column */}
        <div className="content_column">
        <h1>WELCOME TO OUR COMPANY</h1>
        <h2>Feel the difference and Relaxation!</h2>
        <p>
            We successfully cope with tasks of varying complexity, provide long-term guarantees, and regularly master new technologies.
         Our portfolio includes dozens of successfully completed projects of houses of different storeys.
        </p>
        <ul>
          <li>We successfully cope with tasks of varying complexity.</li>
          <li>Long-term guarantees and regularly.</li>
          <li>Master new technologies.</li>
        </ul>
        <h3>Call For Taxi</h3>
        <p className="phone_number">5267-214-392</p>
      </div>
      </div>
        <div className="background_container">
              {/* Background Image as img tag */}
              <img src={backgroundImage} alt="" className="background_image" />
              <div className="main_content">
                {/* Content Section */}
                <div className="text_section">
                  <h1>OUR SERVICES</h1>
                  <h2>Our Best Services For You</h2>
                  <ul>
                    <li> 01. City Transport</li>
                    <li> 02. Online Booking</li>
                    <li> 03. Regular Transport</li>
                    <li> 04. Airport Transfer</li>
                  </ul>
                </div>
        
                {/* Image Section */}
                <div className="image_section">
                  <img src={image1} alt="Company" className="company_image" />
                </div>
              </div>
              </div>
            <Container className='how-it-works'>
            <div className="section_title">
              <h6>ORDER TAXI ONLINE</h6>
              <h2>How It Works</h2>
            </div>
            <Row className="steps_row">
            <Col md={4} className="steps">
              <div className="step_icon"><img className='step_img' src={icon} alt="" /></div>
              <div className="step_content">
              <h4>BOOK IN JUST 2 TABS</h4>
              <p>Skip the hassle and book your ride instantly! 
              Select location, tap to confirm, and you're ready to go!</p>
              </div>
            </Col>

             <Col md={4} className="steps">
              <div className="step_icon"><img className='step_img' src={track} alt="" /></div>
              <div className="step_content">
              <h4>TRACK YOUR DRIVER</h4>
              <p>Stay updated! Track your driver’s location on the map, 
              see arrival time with smooth pickup experience..</p>
              </div>
            </Col>

            <Col md={4} className="steps">
              <div className="step_icon"><img className='step_img' src={route} alt="" /></div>
              <div className="step_content">
              <h4>PICK & ARRIVE SAFELY</h4>
              <p>Enjoy secure and comfortable ride. 
              Our trusted drivers ensure a smooth journey every time!</p>
              </div>
            </Col>
            </Row>
      </Container>
    
    </div>
  );
};

export default About;