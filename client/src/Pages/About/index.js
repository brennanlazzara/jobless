

import React from 'react';
import {
 Container
} from 'reactstrap';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";



const About = (props) => {
  return (
    <>
    <Header/>
    <Container>
    <div>
  <div>
    <h1 className="text-center">THE COMPANY</h1>
    <p className="text-center">The world is a very strange place right now. COVID-19 is affecting people in many ways across the globe. The United Staes has over 30 million Americans that have filed for unemployment benefits within the past three months, and that number continues
      to rise everyday. Here at Jobless, we want to help those in need of employment due to COVID-19. We have set up a search for you to find remote and essential employment in to help alleviate unemployment rates during these hard times. Jobless
      is committed to and passionate about helping finding your next job or career.</p>
    <hr />
    <hr />
    <h2 className="text-center">DEVELOPERS</h2>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-md-4" style={{padding: 20}}>
        <div className="box">
          <div className="box-img"><img src="assets/img/chris.jpg" alt="Williamson" /></div>
          <div className="box-content">
            <h4 className="title">CHRIS</h4>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae libero orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed vestibulum.</p>
            <ul className="social-links">
              <li><a href="#"><FontAwesomeIcon icon={faGithubAlt} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faBriefcase} /></a></li>

            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-4" style={{padding: 20}}>
        <div className="box">
          <div className="box-img"><img src="assets/img/brennan.jpg" alt="Williamson" /></div>
          <div className="box-content">
            <h4 className="title">brennan<br /></h4>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae libero orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed vestibulum.</p>
            <ul className="social-links">
              <li><a href="#"><FontAwesomeIcon icon={faGithubAlt} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faBriefcase} /></a></li>

            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-4" style={{padding: 20}}>
        <div className="box">
          <div className="box-img"><img src="assets/img/shawn.jpeg" alt="Williamson" /></div>
          <div className="box-content">
            <h4 className="title">Shawn<br /></h4>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae libero orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed vestibulum.</p>
            <ul className="social-links">
              <li><a href="#"><FontAwesomeIcon icon={faGithubAlt} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faBriefcase} /></a></li>

            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-6 col-md-4" style={{marginLeft: '16%', padding: 20}}>
        <div className="box">
          <div className="box-img"><img src="assets/img/grant.jpeg" alt="Williamson" /></div>
          <div className="box-content">
            <h4 className="title">GRant</h4>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae libero orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed vestibulum.</p>
            <ul className="social-links">
              <li><a href="#"><FontAwesomeIcon icon={faGithubAlt} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faBriefcase} /></a></li>

            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-4" style={{padding: 20}}>
        <div className="box">
          <div className="box-img"><img src="assets/img/tabby.jpeg" alt="Williamson" /></div>
          <div className="box-content">
            <h4 className="title">Tabitha<br /></h4>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae libero orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed vestibulum.</p>
            <ul className="social-links">
              <li><a href="#"><FontAwesomeIcon icon={faGithubAlt} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faBriefcase} /></a></li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container" style={{width: 'auto', height: 80, backgroundColor: '#ffffff'}}>
  </div>
</div>
    </Container>
    <Footer />
    </>
  );
};

export default About;