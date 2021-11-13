import React, { useState } from "react";
import { Form, Row, Col, Button, Card, Container } from "react-bootstrap";

class Fibonacci extends React.Component {
  handleChange = (e) => {
    console.log("change");
  };

  render() {
    return (
      <Container>
        <Card>
          <Card.Header>
            <Card.Title className="text-center">Fibonacci</Card.Title>
          </Card.Header>
          <Card.Body>hola</Card.Body>
          <Form>
            <Row></Row>
          </Form>
        </Card>
      </Container>
    );
  }
}

export default Fibonacci;
