import React, { useRef, useContext, useState, useEffect } from "react";
import BlogContext from "../context/BlogContext";
import ReadMore from "./ReadMore";
import likeimg from "../like.png";
import "./TotalBlogItem.css";
const host = process.env.PORT || 5000;

// yaha props me blog.js se aaya hua data use ho raha hai
const TotalItem = (props) => {
  const context = useContext(BlogContext);
  const { likeBlog } = context;
  const { blog } = props;
  // const ref = useRef(null)
  // const refClose = useRef(null)

  // ye username show krne ke liye
  // date convert krne ke liye bhi
  const initUser = [];
  const [user, setUser] = useState(initUser);
  useEffect(() => {
    getUser();
    showDate();
  }, []);

  const getUser = async () => {
    // API
    const response = await fetch(
      `http://localhost:${host}/api/auth/getbloguser/${blog.user}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    // console.log(json);
    setUser(json);
  };

  // convert date to local time
  let initDate = "";
  const [finDate, setDate] = useState(initDate);
  const showDate = () => {
    const myDate = new Date(blog.date);
    const tempDate = myDate.toLocaleString();
    setDate(tempDate);
  };

  return (
    <div>
      <div className="card bg-transparent my-3">
        <div className="card-body text-dark">
          <div className="align-items-center">
            <h5 className="card-title">{blog.title}</h5>
            <h5>AUTHOR : {user.name}</h5>
            {/* Here blog.content is the children for readmore component */}
            <p className="card-text py-4">
              <ReadMore>{blog.content}</ReadMore>
            </p>
            <div className="row">
              
              {/* show the length of the like list array */}
              <h5 className="col justify-content-start">
                <img className="likeimg-css" onClick={() => {likeBlog(blog._id);}}src={likeimg} />
                {" " + blog.likes.length }
              </h5>

              <h5 className="col d-flex justify-content-end">
                Date Added : {finDate}
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* https://www.freeiconspng.com/thumbs/youtube-like-png/youtube-like-button-png-11.png */}
    </div>
  );
};

export default TotalItem;
