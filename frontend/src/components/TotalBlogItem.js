import React , {useRef} from "react";
import BlogContext from "../context/BlogContext";

// yaha props me blog.js se aaya hua data use ho raha hai
const TotalItem = (props) => {
  
  const { blog } = props;
  // const ref = useRef(null)
  // const refClose = useRef(null)

  return (
  
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">
              {blog.title}</h5>
          </div>
          <p className="card-text">{blog.content}</p>
          <i class="fa-regular fa-comment"></i>
          <button class="fas fa-thumbs-up" ></button>
          
        </div>
      </div>

     
    </div>
  );
};

export default TotalItem;
