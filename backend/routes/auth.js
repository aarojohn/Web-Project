// auth.js
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Define routes for user authentication (login, register, logout)
// models/Resource.js
const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
  title: String,
  description: String,
  fileUrl: String,
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Resource", resourceSchema);

module.exports = router;
