import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import BlogState from "./context/BlogState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";
import TotalBlogs from "./components/TotalBlogs";
import AddBlog from "./components/AddBlog";

// very important : never declare a component as blogState (camelCasing), but BlogState. As the browser only recognizes PascalCasing.
function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <BlogState>
        <Router>
          <div className="bg-dark text-light bg-img">

            <Navbar showAlert={showAlert} />
            <Alert alert={alert} />
            <div className="container-fluid px-5 pb-5">
              <Routes>
                <Route path="/home" element={<Home showAlert={showAlert} />} />
                <Route path="/addBlog" element={<AddBlog showAlert={showAlert} />} />
                <Route path="/about" element={<About />} />
                <Route path="/allBlogs" element={<TotalBlogs />} />
                <Route path="/login" element={<Login showAlert={showAlert} />} />
                <Route path="/signup" element={<Signup showAlert={showAlert} />} />
                {/* <Route path="*" element={<NotFound/>}/> */}
              </Routes>
            </div>

          </div>
        </Router>
      </BlogState>
    </>
  );
}

export default App;
