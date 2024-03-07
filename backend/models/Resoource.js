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
// routes/resources.js
const express = require("express");
const router = express.Router();
const Resource = require("../models/Resource");

// Define routes for CRUD operations on resources

module.exports = router;
