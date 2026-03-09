const Blog = require("../models/Blog");

exports.getBlogs = async(req,res)=>{

  const blogs = await Blog.find();

  res.json(blogs);

};

exports.createBlog = async(req,res)=>{

  const blog = new Blog(req.body);
  await blog.save();

  res.json({message:"Blog Created"});

};