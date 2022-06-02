import React from "react";
import BlogContext from "../context/BlogContext";
import { useContext, useEffect, useRef } from "react";
import TotalItem from "./TotalBlogItem";
const TotalBlogs = () => {
  const context = useContext(BlogContext);
  const { blogs, allBlogs } = context;
  useEffect(() => {
    allBlogs();
  }, []);
  return (
    <div className="container">
      <h2 className="all-blog">All BLOGS</h2>

      <div className="row my-3">
        <div className="mx-2">
          {blogs.length === 0 && "No blogs to display"}
        </div>
        {blogs.map((blog) => {
          // blog={blog}, this value will be passed as props to blogItems, and blog can be destructured there
          return <TotalItem key={blog._id} blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default TotalBlogs;
