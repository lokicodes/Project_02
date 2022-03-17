import React from "react";
import { useContext } from "react";
import BlogContext from "../context/BlogContext";
const About = () => {
  const a = useContext(BlogContext);
  return (
    <div>Hello I am {a.name} and my branch is {a.branch}</div>
  );
};

export default About;
