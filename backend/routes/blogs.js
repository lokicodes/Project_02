const express = require("express");
const fetchUser = require("../middlewares/fetchUser");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Blog = require("../models/Blog");

//Route 1 : Get All the blogs for a particular user. Login required
router.get("/fetchallblogs", fetchUser, async (req, res) => {
  try {
    const blogs = await Blog.find({ user: req.user.id });
    res.json(blogs);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 2 : Create or Add Note to the db
router.post("/createBlog", fetchUser, [
    // ye part validation ke kaam aata hai
    body("title", "Enter a valid title, min length 5 characters").isLength({
      min: 5,
    }),
    body("content", "Content must be 5 characters long").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, content, tag } = req.body;

      // return errors if any :
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const blog = new Blog({
        title,
        content,
        tag,
        user: req.user.id,
      });

      const savedBlog = await blog.save();
      res.json(savedBlog);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
  
);
//Route 3 : Update blog of verified user. Login required
router.put("/updateBlog/:id", fetchUser, async (req, res) => {
  
 try {
  const {title, content, tag} = req.body;

  // creating a new object which is going to update the existing blog
  const newBlog = {};
  if(title){newBlog.title = title};
  if(content){newBlog.content = content};
  if(tag){newBlog.tag = tag};

  // first check whether the blog even exists or not
  const blog = await Blog.findById(req.params.id);
  if(!blog){return res.status(404).json("Not Found")};

  // now check whether the user is updating its own blog or not
  if(blog.user.toString() !== req.user.id){
    return res.status(401).json("Not Allowed");
  }

  //updation of Blog
  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id , {$set : newBlog} , {new : true});
  res.json({updatedBlog});
 } catch (error) {
  console.error(error.message);
  res.status(500).send("Internal Server Error");
}
});


//Route 4 : Delete blog of verified user. Login required
router.delete("/deleteBlog/:id", fetchUser, async (req, res) => {

  try {
    // first check whether the blog even exists or not
  const blog = await Blog.findById(req.params.id);
  if(!blog){return res.status(404).json("Not Found")};

  // now check whether the user is deleting its own blog or not
  if(blog.user.toString() !== req.user.id){
    return res.status(401).json("Not Allowed");
  }

  //Deletion of Blog
  const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
  res.json({deletedBlog});
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
