import React from "react";
import { Link } from "react-router-dom";
import Coingecko from "../assets/coingecko.png";

export default function Footer() {
  return (
    <footer>
      <hr />
      <div className="container text-white">
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <Link to="/" className="text-white">
              PandaSwap.site
            </Link>
          </p>
          <div className="social-icons">
            <ul className="d-flex justify-content-between">
              <li className="social-icons-image">
                <a
                  href="https://www.coingecko.com/en/coins/pandaswap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Coingecko} alt="pandaswap on coingecko" />
                </a>
              </li>
              <li>
                <a
                  href="http://twitter.com/PandaSwapToken"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </li>
              <li>
                <a
                  href="http://t.me/PandaSwapToken"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-telegram fa-2x"></i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Help@PandaSwap.site"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-envelope fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
