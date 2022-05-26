import React , {useRef, useContext} from "react";
import BlogContext from "../context/BlogContext";

// yaha props me blog.js se aaya hua data use ho raha hai
const TotalItem = (props) => {
  const context = useContext(BlogContext);
  const {likeBlog} = context;
  const { blog } = props;
  // const ref = useRef(null)
  // const refClose = useRef(null)

  return (
  
    <div>
      <div className="card my-3">
        <div className="card-body bg-dark text-light">
          <div className="d-flex align-items-center">
            <h5 className="card-title">
             {blog.title}</h5>
          </div>
          <p className="card-text">{blog.content}</p>
          {/* show the length of the like list array */}
          <p>{blog.likes.length}
          <button class="fas fa-thumbs-up" onClick={()=>{likeBlog(blog._id); }}></button>
          </p>
        </div>
      </div>

     
    </div>
  );
};

export default TotalItem;
