import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <header>
          <img src="./pandaswap_logo.png" alt="Pandaswap" />
          <h2 className="text-white">PandaSwap</h2>
        </header>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/swap">
                Swap
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/games">
                Game
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/roadmap">
                RoadMap
              </Link>
            </li>
          </ul>
          <div>
            <a
              className="nav-link btn btn-primary px-4 text-white"
              href="#"
              download="PandaswapPapper.pdf"
            >
              Download PandaswapPapper
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
