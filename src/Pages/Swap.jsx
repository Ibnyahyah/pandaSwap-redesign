import React from "react";
import CountDown from "../components/CountDown";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Swap() {
  return (
    <div>
      <Navbar />
      <div
        className="container mt-5 text-white d-flex align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <div>
          <h4 className="text-center my-4 header-dev">
            PandaSwap in Development Mode
          </h4>
          <div className="row align-items-center">
            <div className="col-sm-6 col-md-6 col-lg-6">
              <p>
                We are launching pandaswap dex. It will take some time until the
                pools and the Farm and Stake section are set up. Until then, you
                can trade our token from the following section in Pancake Swap.
              </p>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <CountDown />
            </div>
          </div>
          <a href="https://pancakeswap.finance/swap?outputCurrency=0x3C82a76556282FecBCdFdefBC0760Dee9D230D5a">
            <button className="btn-primary text-white">
              Buy on PancakeSwap
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
