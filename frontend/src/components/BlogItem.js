import React from "react";
import { useContext } from "react";
import "./BlogItem.css" ;
import BlogContext from "../context/BlogContext";
import ReadMore from "./ReadMore";

// yaha props me blog.js se aaya hua data use ho raha hai
const BlogItem = (props) => {
  const context = useContext(BlogContext);
  const { deleteBlog} = context;
  const { blog , updateBlog } = props;
  return (
    <div>
      <div className="card my-3">
        <div className="card-body bg-colour text-light">
          <div className="d-flex align-items-center">
            <h5 className="card-title">
              {blog.title}
              </h5> 
              {/* // font awesome icons used here */}
              <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteBlog(blog._id); props.showAlert("Deleted Successfully" , "success") ;}}></i>
              <i className="fa-solid fa-pen-clip mx-2" onClick={()=> updateBlog(blog)}></i>
          </div>
          <p className="card-text"><ReadMore>{blog.content}</ReadMore></p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
