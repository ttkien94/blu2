import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function index() {
  return (
    <Card>
      <Card.Img variant="top" src="https://picsum.photos/100/100" />
      <Card.Body>
        <Card.Title>
          Some quick example text to build on the card title
        </Card.Title>
        <Card.Text>March 18, 2016</Card.Text>
        <Button variant="primary">Fashion</Button>
      </Card.Body>
    </Card>
  );
}

export default index;
