import Navbarcomp from "../companents/Navbarcomp";
import Social from "../companents/Social";
import SliderHakkimizda from "../companents/SliderHakkimizda";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import "../App.css";
import Footer from "../companents/Footer";
import DownPictures from "../img/sl1.jpg";
import DownPictures1 from "../img/sl2.jpg";

function Hakkimizda() {
  return (
    <>
      <Social />
      <Navbarcomp />
      <SliderHakkimizda />

      <div className="downauto">
        <MDBContainer>
          <h1 className="text-center">HAKKIMIZDA</h1>
          <MDBRow className="mb-2 ">
            <MDBCol sm="6" md="6" lg="6" center>
              <div className="bg-image hover-overlay sl1">
                <img
                  src={DownPictures}
                  className="img-fluid img-responsive rounded-circle"
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
            <MDBCol sm="6" md="6" lg="6" className="d-flex align-items-end">
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

          <MDBRow className="flex-column-reverse flex-sm-row">
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
              <div className="bg-image hover-overlay sl1">
                <img
                  src={DownPictures1}
                  className="img-fluid img-responsive rounded-circle float-top "
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
          <MDBRow className="mb-3">
            <MDBCol sm="12" md="12" lg="12">
              <div className="bg-image hover-overlay sl2">
                <img
                  src={DownPictures1}
                  className="img-fluid img-responsive rounded-4"
                  alt="test"
                />
                <a href="#!">
                  <div
                    className="mask overlay"
                    style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
                  ></div>
                </a>
              </div>

              <div className=""></div>
            </MDBCol>
            <MDBCol sm="12" md="12" lg="12">
              <div className="text-end writedown1">
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
        </MDBContainer>
      </div>
      <Footer />
    </>
  );
}

export default Hakkimizda;
