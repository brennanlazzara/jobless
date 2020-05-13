

import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

const About = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardImg top width="100%" src="./assets/team1.jpeg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Tabby Garcia</CardTitle>
          <CardSubtitle>Full Stack Developer</CardSubtitle>
          <CardText>Hi I am cool</CardText>
          <Button href="https://tabby-lab.github.io/Portfolio/">Link</Button> 
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./assets/team2.jpeg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Grant Kyle</CardTitle>
          <CardSubtitle>Full Stack Developer</CardSubtitle>
          <CardText>Hi I am cool</CardText>
          <Button href="https://grantkyle.github.io/Steven-Grant-Kyle-Professional-Portfolio/">Link</Button> 
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./assets/team3.jpeg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Brennan Predmore</CardTitle>
          <CardSubtitle>Full Stack Developer</CardSubtitle>
          <CardText>Hi I am cool</CardText>
          <Button href="https://brennanpredmore.github.io/index.html">Link</Button> 
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./assets/team4.jpeg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Shawn Tschoepe</CardTitle>
          <CardSubtitle>Full Stack Developer</CardSubtitle>
          <CardText>Hi I am cool</CardText>
          <Button href="https://linkedin.com/in/shawn-tschoepe-245302195">Link</Button> 
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./assets/team5.jpeg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Chris Searcy</CardTitle>
          <CardSubtitle>Full Stack Developer</CardSubtitle>
          <CardText>Hi I am cool</CardText>
          <Button href="https://christopherneill.github.io/latestportfolio/">Link</Button> 
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default About;