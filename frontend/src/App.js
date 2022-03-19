import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import BlogState from "./context/BlogState";
import Alert from "./components/Alert";

// very important : never declare a component as blogState (camelCasing), but BlogState. As the browser only recognizes PascalCasing.
function App() {
  return (
    <>
      <BlogState>
        <Router>
          <Navbar />
          <Alert message="shubham agrawal raheesjaada" />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="*" element={<NotFound/>}/> */}
            </Routes>
          </div>
        </Router>
      </BlogState>
    </>
  );
}

export default App;
