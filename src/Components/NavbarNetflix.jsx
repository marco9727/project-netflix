import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { BsSearch, BsBell, BsPerson } from "react-icons/bs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../assets/logo.png";

const NavbarNetflix = function () {
  return (
    <div>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="100"
              height="55"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link id="text-links" href="#home">
                Home
              </Nav.Link>
              <Nav.Link id="text-links" href="#TV Show">
                TV Show
              </Nav.Link>
              <Nav.Link id="text-links" href="#Movies">
                Movies
              </Nav.Link>
              <Nav.Link id="text-links" href="#Recently Added">
                Recently Added
              </Nav.Link>
              <Nav.Link id="text-links" href="#My List">
                My List
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div>
            {" "}
            <Row className="d-flex align-items-center">
              <Col>
                <BsSearch className="icons" />
              </Col>
              <Col id="KIDS" className="fw-bold">
                KIDS
              </Col>
              <Col>
                <BsBell className="icons" />
              </Col>
              <Col>
                <BsPerson className="icons" />
              </Col>
            </Row>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarNetflix;
