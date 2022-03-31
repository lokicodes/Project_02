import React from "react";
import BlogContext from "../context/BlogContext";
import { useContext, useEffect} from "react";
import BlogItem from "./BlogItem";

const TotalBlogs = () => {
  const context = useContext(BlogContext);
  const { blogs, allBlogs } = context;
  useEffect(() => {
    allBlogs()
  }, [])
  return (
    <div>
      <div>
        <h2>Your Blogs</h2>
      </div>
      <div className="row my-3">
        <div className="container mx-2">{blogs.length === 0 && "No blogs to display"}</div>
        {blogs.map((blog) => {
          // blog={blog}, this value will be passed as props to blogItems, and blog can be destructured there
          return <BlogItem key={blog._id} blog={blog} />;
        })}
      </div>
    </div>
  )
}

export default TotalBlogs