import React , {useRef, useContext} from "react";
import BlogContext from "../context/BlogContext";
import ReadMore from "./ReadMore";

// yaha props me blog.js se aaya hua data use ho raha hai
const TotalItem = (props) => {
  const context = useContext(BlogContext);
  const {likeBlog} = context;
  const { blog } = props;
  // const ref = useRef(null)
  // const refClose = useRef(null)

  return (
  
    <div>
      <div className="card bg-transparent my-3">
        <div className="card-body text-dark">
          <div className="align-items-center">
            <h5 className="card-title">
             {blog.title}</h5>
          </div>
          {/* Here blog.content is the children for readmore component */}
          <p className="card-text py-4"><ReadMore>{blog.content}</ReadMore></p>
          {/* show the length of the like list array */}
          <p>{blog.likes.length + " "}
          <button class="fas fa-thumbs-up" onClick={()=>{likeBlog(blog._id); }}></button>
          </p>
        </div>
      </div>

     
    </div>
  );
};

export default TotalItem;
