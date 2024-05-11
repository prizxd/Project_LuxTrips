import "./stylesDefault/App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import Book from "./pages/Book/Book";
import Contact from "./pages/Contact/Contact";
import WhyLuxTrips from "./pages/WhyLuxTrips/WhyLuxTrips";
import Supercars_BookWithUs from "./pages/Supercars_BookWithUs/Supercars_BookWithUs";
import "./stylesDefault/reset.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/BookWithUs" element={<Book />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/WhyLuxTrips" element={<WhyLuxTrips />} />
          <Route path="/Supercars" element={<Supercars_BookWithUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
