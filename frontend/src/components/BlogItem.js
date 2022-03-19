import React from "react";
import { useContext } from "react";
import BlogContext from "../context/BlogContext";
// yaha props me blog.js se aaya hua data use ho raha hai
const BlogItem = (props) => {
  const context = useContext(BlogContext);
  const { deleteBlog} = context;
  const { blog } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">
              {blog.title}</h5> 
              {/* // font awesome icons used here */}
              <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteBlog(blog._id)}}></i>
              <i className="fa-solid fa-pen-clip mx-2"></i>
          </div>
          <p className="card-text">{blog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
