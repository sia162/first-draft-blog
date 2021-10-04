const express = require("express");
const app = express();
const port = 5000;

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

const path = require("path");
app.use("/images", express.static(path.join(__dirname, "/images")));

// express package cors -> helps to fetch api from backend in frontend
var cors = require("cors");
app.use(cors());

// const router = express.Router();
// router.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

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
