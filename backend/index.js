const express = require("express");
const app = express();
const port = 5000;

const dotenv = require("dotenv");
dotenv.config();

const connectToMongo = require("./database");
connectToMongo();

// mediator
app.use(express.json());
// available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/posts", require("./routes/posts"));

app.listen(port, () => {
  console.log(`First Draft Backend listening at http://localhost:${port}`);
});
