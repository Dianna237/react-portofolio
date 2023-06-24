const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const db = require("../app/models")
const FeedBack = db.feedback_msg
const {Contact} = require("../app/models/contact");
const connectionString = "mongodb+srv://ayamba:76fTJ5oiSbVcgMEU@feedback.on2qvvl.mongodb.net/"
router.post("/feedback", async (req, res) => {
  const {formData} = req.body;
  try {
    console.log(formData.name);
    const feedback = await FeedBack.create({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });
    res.status(200).send({message: "form submitted successfully", feedback});
  } catch (error) {
    console.error(error);
    res.status(500).send({message: "Failed to sent feedback"}, error);
  }
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to MongoDB database');
    // create a new contact
    const newContact = new Contact({
      name:  formData.name,
      email: formData.email,
      message: formData.message,
    });
    
    // save the new contact to the database
    newContact.save()
      .then(() => {
        console.log('New contact saved to database');
        mongoose.connection.close();
      })
      .catch((error) => {
        console.error('Error saving new contact to database:', error);
        mongoose.connection.close();
      });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB database:', error);
  });
});

module.exports = router;
