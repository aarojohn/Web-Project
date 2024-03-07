// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://localhost/quizmaster", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Routes
const resourcesRouter = require("./routes/resources");
const testsRouter = require("./routes/tests");
const authRouter = require("./routes/auth");

app.use("/api/resources", resourcesRouter);
app.use("/api/tests", testsRouter);
app.use("/api/auth", authRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
