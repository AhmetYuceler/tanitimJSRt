import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import DownPictures from "../img/a1pictures.png";
import "../App.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import Footer from "./Footer";

function SliderDown() {
  return (
    <>
      <div className="downauto">
        <MDBRow className="mb-3">
          <MDBCol sm="12" md="6" lg="6">
            <div className="bg-image hover-overlay">
              <img
                src={DownPictures}
                className="img-fluid img-responsive"
                alt="test"
              />
              <a href="#!">
                <div
                  className="mask overlay"
                  style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
                ></div>
              </a>
            </div>
          </MDBCol>
          <MDBCol sm="12" md="6" lg="6">
            <div className="text-end writedown">
              <h1 className="text-center">BAŞLIK YAZILARI</h1>
              <p className="text-center fontw">
                m30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30lorem30
                lorem30 lorem30 lorem30 lorem30 lorem30 lorem30lorem30 lorem30
                lorem30 lorem30 lorem30 lorem30 lorem30lorem30 lorem30 lorem30
                lorem30 lorem30 lorem30 lorem30lorem30 lorem30 lorem30 lorem30
                lorem30 lorem30 lorem30lorem30 lorem30 lorem30 lorem30 lorem30
                lorem30 lorem30lorem30 lorem30 lorem30 lorem30 lorem30 lorem30
                lorem30lorem30 lorem30 lorem30 lorem30 lorem30 lorem30
                lorem30lorem30 lorem30 lorem30 lorem30 lorem30 lorem30
                lorem30lorem30
              </p>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
      <div className="downauto">
        <MDBRow className="mb-3 flex-column-reverse flex-sm-row">
          <MDBCol sm="12" md="6" lg="6">
            <div className="text-end writedown">
              <h1 className="text-center">BAŞLIK YAZILARI</h1>
              <p className="text-center fontw">
                m30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30lorem30
                lorem30 lorem30 lorem30 lorem30 lorem30 lorem30lorem30 lorem30
                lorem30 lorem30 lorem30 lorem30 lorem30lorem30 lorem30 lorem30
                lorem30 lorem30 lorem30 lorem30lorem30 lorem30 lorem30 lorem30
                lorem30 lorem30 lorem30lorem30 lorem30 lorem30 lorem30 lorem30
                lorem30 lorem30lorem30 lorem30 lorem30 lorem30 lorem30 lorem30
                lorem30lorem30 lorem30 lorem30 lorem30 lorem30 lorem30
                lorem30lorem30 lorem30 lorem30 lorem30 lorem30 lorem30
                lorem30lorem30
              </p>
            </div>
          </MDBCol>
          <MDBCol sm="12" md="6" lg="6">
            <div className="bg-image hover-overlay ">
              <img
                src={DownPictures}
                className="img-fluidx floatw img-responsive"
                alt="test"
              />
              <a href="#!">
                <div
                  className="mask overlay"
                  style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
                ></div>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
      <div className="downauto">
        <MDBContainer>
          <MDBRow>
            <MDBCol sm="6" md="4" lg="4" className="autodown">
              <MDBCard>
                <MDBCardImage
                  src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href="#">Button</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol sm="6" md="4" lg="4" className="autodown">
              <MDBCard>
                <MDBCardImage
                  src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href="#">Button</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol sm="6" md="4" lg="4" className="autodown">
              <MDBCard>
                <MDBCardImage
                  src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href="#">Button</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <Footer />
    </>
  );
}

export default SliderDown;
