import React from 'react';
import { Row, Col, Card, Button, CardBody, CardText } from 'reactstrap';
import "./style.css";

const Bottom = (props) => {
  return (

    <Row>
      <Col className="col-sm-6 mt-5" ><img src="./assets/jobless3.jpeg" style={{ width: "100%" }} className="shadow-lg mb-5 rounded" alt="Bottom" />
      </Col>
      <Col className="col-sm-6 mt-5">
        <Card className="shadow-lg mb-5 rounded">
          <CardBody>
           
            <CardText> The world is a very strange place right now. COVID-19 is affecting  people in many ways across the globe. The United Staes has over 30 million Americans that have filed for unemployment benefits within the past three months, and that number continues to rise everyday. Here at Jobless, we want to help those in need of employment due to COVID-19. We have set up a search for you to find remote and essential employment in to help alleviate unemployment rates during these hard times. Jobless is committed to and passionate about helping finding your next job or career.</CardText>
            <Button href={'/joblistings'}>Find Jobs</Button>
          </CardBody>
        </Card>
      </Col>
    </Row>




  )
}

export default Bottom;