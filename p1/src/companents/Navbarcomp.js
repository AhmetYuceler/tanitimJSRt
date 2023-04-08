import React from "react";
import "../Navbarcomp.css";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function Navbarcomp() {
  return (
    <div className="hero">
      <Navbar className="m-auto" expand="sm">
        <Container fluid>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ color: "white" }}
            split
          >
            <div className="mobile-only">MENÜ ↙</div>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto" navbar>
              <Nav.Link href="/" className="navlink active">
                Anasayfa
              </Nav.Link>
              <Nav.Link href="/Hakkimizda" className="navlink">
                Hakkımızda
              </Nav.Link>
              <Nav.Link href="/Paketler" className="navlink">
                Paketler
              </Nav.Link>
              <Nav.Link href="/Duyurular" className="navlink">
                Duyurular
              </Nav.Link>
              <Nav.Link href="/Iletisim" className="navlink">
                İletişim
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
