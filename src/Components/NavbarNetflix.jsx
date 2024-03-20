import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { BsSearch, BsBell, BsPerson } from "react-icons/bs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const NavbarNetflix = function () {
  // const location = useLocation();
  return (
    <div>
      <Navbar expand="lg">
        <Container fluid>
          {/* <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="100"
              height="55"
              className="d-inline-block align-top"
            />
          </Navbar.Brand> */}
          <Link to="/">
            <div className="navbar-brand">
              <img
                alt=""
                src={logo}
                width="100"
                height="55"
                className="d-inline-block align-top"
              />
            </div>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto  ">
              <Link id="text-links" to="/">
                Home
              </Link>
              <Link id="text-links" to="/TvShow">
                TV Show
              </Link>
              <Link id="text-links">Movies</Link>
              <Link id="text-links">Recently Added</Link>
              <Link id="text-links">My List</Link>
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
