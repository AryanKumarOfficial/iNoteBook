const connectToMongo = require("./db");
connectToMongo();
const express = require("express");
const { json } = require("express");
const app = express();
const port = 3000;
const { body, validationResult } = require("express-validator");
app.use(express.json());

// Available routes
app.get("/", (req, res) => {
  res.send("Hello aryan!");
});
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Backend listening on port http://localhost:${port}`);
});
