import React from "react";
import BlogContext from "../context/BlogContext";
import { useContext, useEffect } from "react";
import BlogItem from "./BlogItem";
import AddBlog from "./AddBlog";
const Blogs = () => {
  const context = useContext(BlogContext);
  const { blog , getBlogs} = context;
  useEffect(() => {
    getBlogs()
  }, [])
  
  return (
    // blog add karne ki functionality wala component (AddBlog)
    <div>
      <AddBlog />
      <div>
        <h1>Your Blogs</h1>
      </div>
      <div className="row my-3">
        {blog.map((blog) => {
          // blog={blog}, this value will be passed as props to blogItems, and blog can be destructured there
          return <BlogItem key={blog._id} blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default Blogs;
