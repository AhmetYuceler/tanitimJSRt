import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import Slider3 from "../img/3.png";
import Slider4 from "../img/sl5.jpg";
import Slider6 from "../img/sl6.jpg";

function Slider() {
  return (
    <div style={{ boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)" }}>
      <MDBRow className="mb-3">
        <MDBCol sm="12" md="12" lg="12">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100 shadow-4"
                src={Slider4}
                alt="Second slide"
                style={{
                  objectFit: "cover",
                  maxHeight: "50vh",
                  width: "100%",
                  height: "auto",
                }}
              />
              <Carousel.Caption>
                <h3>DUYURULAR</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100 shadow-4"
                src={Slider6}
                alt="Second slide"
                style={{
                  objectFit: "cover",
                  maxHeight: "50vh",
                  width: "100%",
                  height: "auto",
                }}
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 shadow-4"
                src={Slider3}
                alt="Third slide"
                style={{
                  objectFit: "cover",
                  maxHeight: "50vh",
                  width: "100%",
                  height: "auto",
                }}
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default Slider;
