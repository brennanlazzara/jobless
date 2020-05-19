import React from 'react';
import { Row, Col, Card, Button, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

const Bottom = (props) => {
  return (

    <Row>
      <Col className="col-sm-6 mt-5" ><img src="./assets/jobless3.jpeg" style={{ width: "100%" }} className="shadow-lg mb-5 rounded" alt="Bottom" />
      </Col>
      <Col className="col-sm-6 mt-5">
        <Card className="shadow-lg mb-5 rounded">
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </Col>
    </Row>




  )
}

export default Bottom;