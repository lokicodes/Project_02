import {React, useState, useContext} from "react";
import BlogContext from "../context/BlogContext";
const AddBlog = () => {
  const context = useContext(BlogContext);
  const { addBlog } = context;
  const [blog, setBlog] = useState({title :"", content :"", tag :"default"})


  const handleClick = (e) => {
      e.preventDefault();
      addBlog(blog.title , blog.content, blog.tag);
  };


  const onChange = (e)=>{
    // jo bhi name ki value hai har field me usko change(continuosly update) krke jo bhi type kr rahe hain vo value daal di jayegi
      setBlog({...blog, [e.target.name] : e.target.value})
  }

  
  return (
    <div>
      <div className="container my-3">
        <h1>Add A Note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
                Content
            </label>
            <input
              type="text"
              className="form-control"
              id="content"
              name="content"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
                Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
            />
          </div>
         
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
