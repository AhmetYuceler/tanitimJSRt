import "../App.css";
import React from "react";
import Navbarcomp from "../companents/Navbarcomp";
import Social from "../companents/Social";
import Slideriletisim from "../companents/Slideriletisim";
import Footer from "../companents/Footer";

function Iletisim() {
  return (
    <div>
      <Social />
      <Navbarcomp />
      <Slideriletisim />

      <div className="container contact-form">
        <form method="post">
          <h3>İletişim Formu</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="txtName"
                  className="form-control"
                  placeholder="Ad Soyad *"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtEmail"
                  className="form-control"
                  placeholder="Mail Adresi *"
                />
              </div>
              <div className="form-group">
                <input
                  type="phone"
                  name="txtPhone"
                  maxLength={11}
                  className="form-control"
                  placeholder="Telefon No *"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea
                  name="txtMsg"
                  className="form-control"
                  placeholder="Göndermek istediginiz mesajı yazın... *"
                  style={{ width: "100%", height: "150px" }}
                ></textarea>

                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                  style={{ marginLeft: "4px" }}
                />
                <label class="form-check-label" for="exampleCheck1">
                  Sözleşmeyi okudum ve onaylıyorum.
                </label>
                <div className="form-group">
                  <input
                    type="submit"
                    name="btnSubmit"
                    className="btnContact"
                    value="Gönder"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Iletisim;
