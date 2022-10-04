import React from "react";
import CountDown from "../components/CountDown";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Games() {
  return (
    <div>
      <Navbar />
      <div
        className="container mt-5 text-white d-flex align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <div>
          <h4 className="text-center my-4 header-dev">
            Games in Development Mode
          </h4>
          <div className="row align-items-center">
            <div className="col-sm-6 col-md-6 col-lg-6">
              <p>
                Our team is building and preparing several exciting games. Our
                holders can play these games with Panda tokens and earn money.
                This section will be up and running soon.
              </p>
              <CountDown />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="image-container">
                <img
                  src="./images/pandaswap_game.gif"
                  alt="Panda swap Play 2 Earn"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
