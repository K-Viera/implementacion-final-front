import React from "react";
import { Form, Row, Col, Button, Card, Container } from "react-bootstrap";
const { url } = require("../../global");

class Factorial extends React.Component {
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
    let data = { number: 3 };
    fetch("https://es.numberempire.com/factorialcalculator.php", {
      method: "POST",
      body: JSON.stringify(data),
      mode: "no-cors",
      headers: {
        "Content-type": "text/html; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Container>
        <Card>
          <Card.Header>
            <Card.Title className="text-center">Factorial</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col>
                  <Form.Control
                    className="mb-3"
                    type="number"
                    name="input"
                    placeholder="Ingrese el valor"
                    onChange={this.handleChange}
                    value={this.state.input}
                    min="0"
                    required
                    autoFocus
                  ></Form.Control>
                </Col>
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

export default Factorial;
