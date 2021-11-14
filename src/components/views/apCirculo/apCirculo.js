import React from "react";
import { Form, Row, Col, Button, Card, Container } from "react-bootstrap";
const { url } = require("../../global");

class APCirculo extends React.Component {
  state = {
    radio: "",
    area: "",
    perimetro: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviado");
    let data = { radio: this.state.radio };
    fetch(url + "/circulo", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) =>
        response.json().then((json) => {
          if (json.area) {
            this.setState({
              ...this.state,
              area: json.area,
              perimetro: json.perimetro,
            });
          } else {
            this.setState({
              ...this.state,
              area: json,
              perimetro: json,
            });
          }
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
              Area y Perimetro Circulo
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col>
                  <Form.Control
                    className="mb-3"
                    id="radio"
                    type="number"
                    name="radio"
                    placeholder="Radio"
                    onChange={this.handleChange}
                    value={this.state.radio}
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
                  id="submit"
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
              Area : <textarea id="area" value={this.state.area} readOnly />
            </Row>
            <br />
            <Row>
              Perimetro :{" "}
              <textarea id="perimetro" value={this.state.perimetro} readOnly />
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default APCirculo;
