import React from "react";
import { Form, Row, Col, Button, Card, Container } from "react-bootstrap";
const { url } = require("../../global");

class APRectangulo extends React.Component {
  state = {
    lado1: "",
    lado2: "",
    area: "",
    perimetro: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviado");
    let data = { lado1: this.state.lado1, lado2: this.state.lado2 };
    fetch(url + "/rectangulo", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) =>
        response.json().then((json) => {
          this.setState({
            ...this.state,
            area: json.area,
            perimetro: json.perimetro,
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
            <Card.Title className="text-center">
              Area y Perimetro Rectangulo
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col>
                  <Form.Control
                    className="mb-3"
                    type="number"
                    name="lado1"
                    placeholder="Lado Uno"
                    onChange={this.handleChange}
                    value={this.state.lado1}
                    min="0"
                    required
                    autoFocus
                  ></Form.Control>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    className="mb-3"
                    type="number"
                    name="lado2"
                    placeholder="Lado Dos"
                    onChange={this.handleChange}
                    value={this.state.lado2}
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
              Area : <input value={this.state.area} readOnly />
            </Row>
            <br />
            <Row>
              Perimetro : <input value={this.state.perimetro} readOnly />
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default APRectangulo;
