const Contact = require("../models/Contact");

exports.createContact = async(req,res)=>{

  const contact = new Contact(req.body);
  await contact.save();

  res.json({message:"Message Sent"});

};