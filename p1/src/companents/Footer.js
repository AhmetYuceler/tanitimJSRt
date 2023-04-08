import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <div className="">
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section style={{ padding: "20px" }}>
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon color="secondary" icon="gem" className="me-3" />
                  Firma nick
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Sosyal Medya</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Facebook
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    İnstagram
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Twitter
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="/" className="text-reset">
                    Anasayfa
                  </a>
                </p>
                <p>
                  <a href="/Hakkimizda" className="text-reset">
                    Hakkımızda
                  </a>
                </p>
                <p>
                  <a href="/Paketler" className="text-reset">
                    Paketler
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">İletişim</h6>
                <p>
                  <MDBIcon color="secondary" icon="home" className="me-2" />
                  Kayseri / Turkey
                </p>
                <p>
                  <MDBIcon color="secondary" icon="envelope" className="me-3" />
                  info@example.com
                </p>
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-3" /> +
                  01 234 567 88
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="https://ahmetyuceler.com.tr/">
            ahmetyuceler.com.tr
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
