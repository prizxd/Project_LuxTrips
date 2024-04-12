import "./stylesDefault/App.scss";
import HomePage from "./pages/HomePage/HomePage";
import Book from "./pages/Book/Book";
import "./stylesDefault/reset.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Book" element={<Book />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
