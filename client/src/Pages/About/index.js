

import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Container
} from 'reactstrap';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const About = (props) => {
  return (
    <>
    <Header/>
    <Container>
      <div className="text-center">
        <h1>Our Company</h1>
        <p>The world is a very strange place right now. COVID-19 is affecting  people in many ways across the globe. The United Staes has over 30 million Americans that have filed for unemployment benefits within the past three months, and that number continues to rise everyday. Here at Jobless, we want to help those in need of employment due to COVID-19. We have set up a search for you to find remote and essential employment in to help alleviate unemployment rates during these hard times. Jobless is committed to and passionate about helping finding your next job or career.</p>
        <h1>Our Developers</h1>
      </div>

    
    
    <CardDeck>
      <Card className="shadow-lg mb-5 rounded">
        <CardImg top width="100%" src="./assets/team1.jpeg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Tabby Garcia</CardTitle>
          <CardSubtitle>Full Stack Developer</CardSubtitle>
          <CardText>Hi I am cool</CardText>
          <Button href="https://tabby-lab.github.io/Portfolio/">Link</Button> 
        </CardBody>
      </Card>
      <Card className="shadow-lg mb-5 rounded">
        <CardImg top width="100%" src="./assets/team2.jpeg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Grant Kyle</CardTitle>
          <CardSubtitle>Full Stack Developer</CardSubtitle>
          <CardText>Hi I am cool</CardText>
          <Button href="https://grantkyle.github.io/Steven-Grant-Kyle-Professional-Portfolio/">Link</Button> 
        </CardBody>
      </Card>
      <Card className="shadow-lg mb-5 rounded">
        <CardImg top width="100%" src="./assets/team3.jpeg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Brennan Predmore</CardTitle>
          <CardSubtitle>Full Stack Developer</CardSubtitle>
          <CardText>Hi I am cool</CardText>
          <Button href="https://brennanpredmore.github.io/index.html">Link</Button> 
        </CardBody>
      </Card>
      <Card className="shadow-lg mb-5 rounded">
        <CardImg top width="100%" src="./assets/team4.jpeg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Shawn Tschoepe</CardTitle>
          <CardSubtitle>Full Stack Developer</CardSubtitle>
          <CardText>Hi I am cool</CardText>
          <Button href="https://linkedin.com/in/shawn-tschoepe-245302195">Link</Button> 
        </CardBody>
      </Card>
      <Card className="shadow-lg mb-5 rounded">
        <CardImg top width="100%" src="./assets/team5.jpeg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Chris Searcy</CardTitle>
          <CardSubtitle>Full Stack Developer</CardSubtitle>
          <CardText>Hi I am cool</CardText>
          <Button href="https://christopherneill.github.io/latestportfolio/">Link</Button> 
        </CardBody>
      </Card>
    </CardDeck>
    </Container>
    <Footer />
    </>
  );
};

export default About;