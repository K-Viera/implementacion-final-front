import React from "react";
import { Form, Row, Col, Button, Card, Container } from "react-bootstrap";
const { url } = require("../../global");

class Fibonacci extends React.Component {
  state = {
    input: "",
    response: "",
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviado");
    let data = { input: this.state.input };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) =>
        response.json().then((json) => {
          this.setState({
            ...this.state,
            response: json,
          });
        })
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Container>
        <Card>
          <Card.Header>
            <Card.Title className="text-center">Fibonacci</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Form.Control
                  type="number"
                  name="input"
                  placeholder="Ingrese el valor"
                  onChange={this.handleChange}
                  value={this.state.input}
                  min="0"
                  required
                  autoFocus
                ></Form.Control>
              </Row>
              <Row>
                <Button
                  size="lg"
                  variant="outline-primary btn-block"
                  type="submit"
                  block
                >
                  Calcular
                </Button>
              </Row>
            </Form>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Header>
            <Card.Title className="text-center">Resultados</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              Resultado : <textarea value={this.state.response} readOnly />
            </Row>
            <Row></Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Fibonacci;
