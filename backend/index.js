const express = require("express");
const app = express();
const port = 5000;

const dotenv = require("dotenv");
dotenv.config();

const connectToMongo = require("./database");
connectToMongo();

// FOR IMAGES:(multer package is used) this will basically take out file and save it inside images and filename will be the name we are providing
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, callbackfn) => {
    callbackfn(null, "images");
  },
  filename: (req, file, callbackfn) => {
    callbackfn(null, req.body.name);
    // callbackfn(null, "image.png");
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file has been uploaded");
});

// mediator
app.use(express.json());
// available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/posts", require("./routes/posts"));
app.use("/api/categories", require("./routes/categories"));

app.listen(port, () => {
  console.log(`First Draft Backend listening at http://localhost:${port}`);
});
