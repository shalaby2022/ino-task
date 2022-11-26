import React from "react";
import "./navbar.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/list" className="text-alert fw-bold  fs-3">
          ALGYM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className="text-primary">
              HOME
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-primary">
              HOT DEALS
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">العربيه</Nav.Link>
            <Nav.Link href="#" className="fw-bold fs-6 btns">
              SIGN IN
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold fs-6 btns">
              SIGN UP
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

// <nav className="container">
//   <div className="Left_container">
//     <ul>
//       <div className="logo_container">
//         <li className="logo">ALGYM</li>
//       </div>
//       <div className="home">
//         <li>HOME</li>
//         <li>HOT DEALS</li>
//       </div>
//     </ul>
//   </div>
//   <div className="buttons">
//     <ul>
//       <div className="lang_container">
//         <li>العربيه</li>
//       </div>
//       <div className="sign_container">
//         <li>SIGN IN</li>
//         <li>SIGN UP</li>
//       </div>
//     </ul>
//   </div>
// </nav>
