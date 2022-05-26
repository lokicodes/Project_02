import { React, useState, useContext } from "react";
import BlogContext from "../context/BlogContext";
import "./AddBlog.css";
import pen from "../pen.png" ;
const AddBlog = (props) => {
  const context = useContext(BlogContext);
  const { addBlog } = context;
  const [blog, setBlog] = useState({ title: "", content: "", tag: "default" })


  const handleClick = (e) => {
    e.preventDefault();
    addBlog(blog.title, blog.content, blog.tag);
    setBlog({ title: "", content: "", tag: "" });
    props.showAlert("Added Successfully", "success");
  };


  const onChange = (e) => {
    // jo bhi name ki value hai har field me usko change(continuosly update) krke jo bhi type kr rahe hain vo value daal di jayegi
    setBlog({ ...blog, [e.target.name]: e.target.value })
  }


  return (
    <div>
      <div className="container text-dark add-blog-cont">
        <div className="row align-items-center">
          <div className="col-md-10">
            <h1 className="mb-4 bloghead">WRITE A NEW BLOG🖊️</h1>
            <form>
              <div className="mb-4">
                <label htmlFor="title" className="form-label">
                  ✒ Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={blog.title}
                  onChange={onChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="content" className="form-label">
                  ✒ Content
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="content"
                  name="content"
                  value={blog.content}
                  onChange={onChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="tag" className="form-label">
                  ✒ Tag
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="tag"
                  name="tag"
                  value={blog.tag}
                  onChange={onChange}
                />
              </div>

              <button
                disabled={blog.title.length < 5 || blog.content.length < 5}
                type="submit"
                className="btn btn-success mb-5 mt-5"
                onClick={handleClick}
              >
                SAVE BLOG
              </button>
            </form>
          </div>

          <div className="col-md-2">
            <img className="img-css" src={pen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
