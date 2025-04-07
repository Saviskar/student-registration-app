const express = require("express");
const cors = require("cors");

// Imports Routes
const UserRoutes = require("./routes/UserRoutes");

const app = express();
const PORT = 8081;

app.use(cors());
// When a client sends data to your server (like from a form or an API request) with
// Content-Type: application/json, this middleware parses that data and
// makes it available in req.body.
app.use(express.json());

// Use Routes
app.use("/user", UserRoutes);

app.listen(PORT, () => {
  console.log("Listening");
});
