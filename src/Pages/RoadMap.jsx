import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function RoadMap() {
  return (
    <div>
      <Navbar />
      <div
        className="container mt-5 text-white d-flex align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="col-sm-6 col-md-8 col-lg-8 mx-auto">
          <h4 className="text-center my-5 header-dev">
            RoadMap Development Mode
          </h4>
          <div>
            <div
              id="carouselExampleControls"
              class="carousel slide text-left"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div>
                    <h4>Phase 1</h4>
                    <ol>
                      <li>Build and test smart contracts✅</li>
                      <li>Tokens go live on PancakeSwap✅</li>
                      <li>Listed on Coingecko✅</li>
                      <li>Exchange Listing✅</li>
                      <li>PANDASWAP.SITE platform</li>
                      <li>PANDASWAP.SITE Game's</li>
                    </ol>
                  </div>
                </div>
                <div class="carousel-item">
                  <div>
                    <h4>Phase 2</h4>
                    <p className="title">
                      Second DeFi Project & Further Development
                    </p>
                    <p>
                      More details about this will be revealed in the weeks
                      ahead. Rewards from this project flow back to PandaSwap
                      holders. There will be further development and features
                      added to PandaSwap and Derpy Panda.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <div>
                    <h4>Phase 3</h4>
                    <p className="title">Community Involvement</p>
                    <p>
                      We will take votes from the community as to what direction
                      to take at this point. Just know that we'll be working on
                      this project long-term and we'll be serving our community
                      and doing our utmost to further the cause.
                    </p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev mt-5"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next mt-5"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
