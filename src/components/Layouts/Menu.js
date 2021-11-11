import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";
import "./Menu.css";

export default function Menu() {
  return (
    <Nav variant="tabs" defaultActiveKey="/">
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="auto"
          height="60"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <div className="divAlign">
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/" className="link">
              Fibonacci/
            </NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/Factorial" className="link">
              Factorial/
            </NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/aptriangulo" className="link">
              APTriangulo/
            </NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/aprectangulo" className="link">
              APRectangulo/
            </NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/apcirculo" className="link">
              APCirculo/
            </NavLink>
          </Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
}
