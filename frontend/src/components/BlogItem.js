import React from "react";
import { useContext } from "react";
import "./BlogItem.css";
import BlogContext from "../context/BlogContext";
import ReadMore from "./ReadMore";

// yaha props me blog.js se aaya hua data use ho raha hai
const BlogItem = (props) => {
  const context = useContext(BlogContext);
  const { deleteBlog } = context;
  const { blog, updateBlog } = props;
  return (
    <div>
      <div className="card bg-transparent text-dark my-3">
        <div className="card-body">
          <div className="align-items-center">
            <h5 className="card-title">
              {blog.title}
            </h5>
          </div>
          <p className="card-text py-4"><ReadMore>{blog.content}</ReadMore></p>
          <div className="utility-icons">
            {/* // font awesome icons used here */}
            <i className="fa-solid fa-pen-clip mx-2" onClick={() => updateBlog(blog)}> Edit</i>
            <i className="fa-solid fa-trash-can mx-2" onClick={() => { deleteBlog(blog._id); props.showAlert("Deleted Successfully", "success"); }}> Delete</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
