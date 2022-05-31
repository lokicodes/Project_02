import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css" ;
const host = "http://localhost:5000";

const Navbar = (props) => {
  //Change paasword
  const [pass, setPass] = useState({ password: "" });
  const editPass = async (password) => {
    // API
    const response = await fetch(`${host}/api/auth/updatePassword`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ password }), // body data type must match "Content-Type" header
    });

    const json = await response.json();
    console.log(json);
  };

  const refClose = useRef(null);
  const handleClick = (e) => {
    editPass(pass.password);
    refClose.current.click();
    props.showAlert("Password Updated Successfully" , "success") ;
  };

  const onChange = (e) => {
    // jo bhi name ki value hai har field me usko change(continuosly update) krke jo bhi type kr rahe hain vo value daal di jayegi
    setPass({ ...pass, [e.target.name]: e.target.value });
    console.log(pass);
  };

  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const initUser = [];
  const [user, setUser] = useState(initUser);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser();
    }
  }, []);

  // api to show user name and data
  const getUser = async () => {
    // API
    const response = await fetch(`http://localhost:5000/api/auth/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    console.log(json);
    setUser(json);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent container-fluid text-dark p-5 pb-4">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Project02
        </NavLink>
        <button
          className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/allblogs">
                All Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              {/* here i we have used Navlink instead of use location as it does the same job */}

              <NavLink className="nav-link" aria-current="page" to="/home">
                Your Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/addBlog">
                Add a Blog
              </NavLink>
            </li>
          </ul>
          {!localStorage.getItem("token") ? (
            <form className="d-flex">
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
              <Link className="btn btn-success mx-1" to="/login" role="button">
                Login
              </Link>
              <Link className="btn btn-success mx-1" to="/signup" role="button">
                Signup
              </Link>
            </form>
          ) : (
            <div>
              <div class="dropdown">
                <button class="btn bg-transparent btn-outline-success text-dark dropdown-toggle name-size" type="button" id="dropdownMenuButton1"
                  data-bs-toggle="dropdown" aria-expanded="false" >
                  {user.name}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#passwordModal" class="dropdown-item" >
                      Change Password
                    </button>
                  </li>

                  <li>
                    <buton type="button" class="dropdown-item" onClick={handleLogout}>
                      Logout
                    </buton>
                  </li>
                </ul>
              </div>
              <div class="modal fade" id="passwordModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content bg-modal text-dark">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                      Change Password
                      </h5>
                      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="password" className="form-label">
                            Enter your new Password
                          </label>
                          <input type="password" className="form-control" id="pass" name="password"                          aria-describedby="emailHelp"
                            value={pass.password}
                            minLength={3}
                            onChange={onChange}
                          />
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        ref={refClose}
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        onClick={handleClick}
                        type="button"
                        class="btn btn-success"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
