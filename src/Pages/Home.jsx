import React from "react";
import Footer from "../components/Footer";
import HowToBuy from "../components/HowToBuy";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container home">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ display: "flex", alignItems: "center", height: "100vh" }}
        >
          <div
            className="row text-white"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-sm-6">
              <h1>WELCOME TO PANDA SWAP</h1>
              <p>
                The decentralized Meme coin grows into PANDA's game Metaverse.
              </p>
              <p>
                PANDA devotes to build a bridge between the the P2E game and
                players and make the game not only for fun but also can make
                money!
              </p>
              <button className="btn btn-primary">Download WhitePapper</button>{" "}
              <button className="btn btn-primary">Buy PST</button>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="image-container top-image">
                <img src="./images/pandaswap_game.gif" alt="Games" />
              </div>
            </div>
          </div>
        </div>
        <div className="info">
          <div
            className="row text-white"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="image-container">
                <img src="./images/pandaswap_game.gif" alt="Panda swap Games" />
              </div>
            </div>
            <div className="col-sm-6">
              <h3>PANDA GAMES</h3>
              <p>
                As the world's leading Play to Earn game platform, PANDA Games
                is the owner of products and services such as GameFi LaunchPad,
                NFT Marketplace, NFT Mining, Farms and ImPANDA Wallet. It is
                committed to providing high-quality P2E games for global game
                users.
              </p>
              <button className="btn btn-primary">Play Game</button>
            </div>

            <div className="col-sm-6 mt-3">
              <h3>PANDA LABS</h3>
              <p>
                PANDA GameFi Labs is an independent game incubator in the WEB3.0
                era. It provides game developers with the complete GameFi game
                design system and technical support to help the game developers
                to finish blockchain game development more easily. At the same
                time, it also incubates high-quality GameFi games.
              </p>
              <button className="btn btn-primary">Enter Lab</button>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 mt-3">
              <div className="image-container">
                <img src="./images/pandaswap_lab.png" alt="Panda swap Lab" />
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="image-container">
                <img
                  src="./images/pandaswap_p2e.png"
                  alt="Panda swap Play 2 Earn"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <h3>Play To Earn Guild Alliance</h3>
              <p>
                P2EGA is a Play-to-Earn gaming guild alliance. We hope to help
                millions of low-income people to gain more profits through
                “Play-to-Earn” games and bring more users into the game!
              </p>
            </div>
          </div>
        </div>
        <div className="tokenomics text-white my-3 text-center">
          <h3>PANDASWAP TOKENOMICS</h3>
          <p>
            PANDA is a token on Binance Smart Chain boasting various impressive
            features. Designed with burning mechanism, the total circulation
            supply of PANDA will be exponentially cut.
          </p>
          <div className="row tokenomics-info mt-4">
            <div className="col-sm-6 col-md-6 col-lg-6">
              <p>
                {" "}
                Besides, by combining burning mechanism, innovative
                Auto-Liquidity function and NFT together,PANDA liquidity is
                allowed to increase rapidly. One of the most important features
                of PANDA is that it practices a large-scale decentralization
                which is rare for other tokens. Mixing these three outstanding
                features together, users are able to get a power house token out
                of the hands of anyone, except the community.
              </p>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="tokenomics-list">
                <ul>
                  <li>
                    <b>Total Supply</b>
                    <br />
                    <span>1,000,000,000,000,000</span>
                  </li>
                  <li>
                    <b>Gradually Destroy</b>
                    <br />
                    <div className="range destroy">
                      <div></div>
                    </div>
                  </li>
                  <li>
                    <b>Fair Launch Supply</b>
                    <br />
                    <div className="range fair">
                      <div></div>
                    </div>
                  </li>
                  <li>
                    <b>Burned Dev Tokens</b>
                    <br />
                    <div className="range burn">
                      <div></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <HowToBuy />
      </div>
      <Footer />
    </div>
  );
}
