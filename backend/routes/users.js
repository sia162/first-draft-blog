const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

// bcrypt package
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

// user fetch to get data
const fetchuser = require("../middleware/jwtcheckfetch");

// UPDATE USER: PUT "/api/users//updateuser/:id" --> login needed
router.put("/updateuser/:id", fetchuser, async (req, res) => {
  try {
    let userId = req.user.id;

    if (req.params.id === userId) {
      try {
        if (req.body.password) {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password, salt);

          const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedUser);
        } else {
          const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedUser);
        }
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
      }
    } else {
      res.status(401).json("you can only update your accoount!");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error!");
  }
});

// DELETE USER: DELETE /api/users/deleteuser/:id --> in body username, userid and password send
router.delete("/deleteuser/:id", fetchuser, async (req, res) => {
  try {
    let userId = req.user.id;

    if (req.params.id === userId) {
      try {
        const user = await User.findById(req.params.id);

        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
      }
    } else {
      res.status(401).json("you can only delete your accoount!");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error!");
  }
});

//  GET USER: GET localhost:5000/api/users/getuser/:id --> in body username, userid and password send
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    let userId = req.user.id;
    // let userId = req.user;
    const user = await User.findById(userId).select("-password");
    res.status(200).json(userId);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error!");
  }
});

module.exports = router;
