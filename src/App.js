import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Speciality from "./components/Speciality/Speciality";
import Popular from "./components/Popular/Popular";
import Gallery from "./components/Gellery/Gellery";
import Reviews from "./components/Reviews/Reviews";
import Order from "./components/Order/Order";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/speciality" element={<Speciality />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/order" element={<Order />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
