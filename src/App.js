import "./App.css";
import Home from "./Pages/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Games from "./Pages/Games";
import Swap from "./Pages/Swap";
import RoadMap from "./Pages/RoadMap";
import BuyPanda from "./Pages/BuyPanda";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/roadmap" element={<RoadMap />} />
        <Route path="/buypanda" element={<BuyPanda />} />
      </Routes>
    </Router>
  );
}

export default App;
