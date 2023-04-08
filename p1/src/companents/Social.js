import React from "react";
import "../social.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { MDBBtn } from "mdb-react-ui-kit";

export default function social() {
  return (
    <div>
      <Navbar className="justify-content-end kampanyaboyt">
        <Container>
          <Nav.Link
            href="/GirisYap"
            className="navlink active"
            style={{ lineHeight: "0px" }}
          >
            <MDBBtn
              outline
              color="light"
              className="me-2"
              type="button"
              size="sm"
            >
              Giriş Yap
            </MDBBtn>
          </Nav.Link>

          <Nav className="ms-auto">
            <Nav.Link href="#home" className="navl">
              {" "}
              <FaFacebook />{" "}
            </Nav.Link>
            <Nav.Link href="#features" className="navl">
              {" "}
              <FaInstagram />{" "}
            </Nav.Link>
            <Nav.Link href="#pricing" className="navl">
              {" "}
              <FaYoutube />{" "}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
