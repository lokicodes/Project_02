import React from "react";
import BlogContext from "../context/BlogContext";
import { useContext, useEffect, useRef, useState } from "react";
import BlogItem from "./BlogItem";
import AddBlog from "./AddBlog";

const Blogs = () => {
  const context = useContext(BlogContext);
  const { blogs, getBlogs, editBlog } = context;
  useEffect(() => {
    getBlogs()
  }, [])

  const ref = useRef(null)
  const refClose = useRef(null)
  const [blog, setBlog] = useState({id: "", editedtitle: "", editedcontent: "", editedtag: "" })


  const updateBlog = (currentBlog) => {
    ref.current.click();
    setBlog({ id: currentBlog._id, editedtitle: currentBlog.title, editedcontent: currentBlog.content, editedtag: currentBlog.tag })
  }

  const handleClick = (e) => {
    editBlog(blog.id, blog.editedtitle, blog.editedcontent, blog.editedtag)
    refClose.current.click();
  }


  const onChange = (e) => {
    // jo bhi name ki value hai har field me usko change(continuosly update) krke jo bhi type kr rahe hain vo value daal di jayegi
    setBlog({ ...blog, [e.target.name]: e.target.value })
  }



  return (
    // blog add karne ki functionality wala component (AddBlog)
    <div>
      <AddBlog />
      {/* <!-- Button trigger modal --> */}
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit your Blog</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">title</label>
                  <input type="text" className="form-control" id="editedtitle" name="editedtitle" aria-describedby="emailHelp"
                    value={blog.editedtitle} onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">
                    Content
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="editedcontent"
                    name="editedcontent"
                    value={blog.editedcontent}
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
                    id="editedtag"
                    name="editedtag"
                    value={blog.editedtag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={handleClick} type="button" className="btn btn-primary">Update Blog</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2>Your Blogs</h2>
      </div>
      <div className="row my-3">
        <div className="container mx-2">{blogs.length === 0 && "No blogs to display"}</div>
        {blogs.map((blog) => {
          // blog={blog}, this value will be passed as props to blogItems, and blog can be destructured there
          return <BlogItem key={blog._id} updateBlog={updateBlog} blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default Blogs;
