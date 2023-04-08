import React from "react";
import Navbarcomp from "../companents/Navbarcomp";
import Social from "../companents/Social";
import SliderPaketler from "../companents/SliderPaketler";
import Footer from "../companents/Footer";
import "../App.css";

function Paketler() {
  return (
    <div>
      <Social />
      <Navbarcomp />
      <SliderPaketler />
      <section className="pricing-section">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="section-title text-center title-ex1">
                <h2>Paketler</h2>
                <p>Genel Duyurular</p>
              </div>
            </div>
          </div>
          {/* Pricing Table starts */}
          <div className="row">
            <div className="col-md-4">
              <div className="price-card ">
                <h2>Personel</h2>
                <p>V1 versiyonu</p>
                <p className="price">
                  <span>800</span>/ TL
                </p>
                <ul className="pricing-offers">
                  <li>Ticari Paketi</li>
                  <li>E-Fatura</li>
                  <li>E-Arşiv</li>
                  <li>500 Kontör Hediye </li>
                  <li>Test özellik </li>
                </ul>
                <a href="#!" className="btn btn-primary btn-mid">
                  Satın Al
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="price-card featured">
                <h2>Ögrenci</h2>
                <p>Test versiyon 11</p>
                <p className="price">
                  <span>69</span>/ Month
                </p>
                <ul className="pricing-offers">
                  <li>Ticari Paketi</li>
                  <li>E-Fatura</li>
                  <li>E-Arşiv</li>
                  <li>500 Kontör Hediye </li>
                  <li>Test özellik </li>
                </ul>
                <a href="#!" className="btn btn-primary btn-mid">
                  Satın Al
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="price-card ">
                <h2>Full Paket</h2>
                <p>Her şey dahil </p>
                <p className="price">
                  <span>89</span>/ TL
                </p>
                <ul className="pricing-offers">
                  <li>Ticari Paketi</li>
                  <li>E-Fatura</li>
                  <li>E-Arşiv</li>
                  <li>500 Kontör Hediye </li>
                  <li>Test özellik </li>
                </ul>
                <a href="#!" className="btn btn-primary btn-mid">
                  Satın Al
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Paketler;
