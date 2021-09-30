const router = require("express").Router();
const User = require("../models/User");

// bcrypt package
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

// jwt authentication
var jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

// REGISTER: POST "/api/auth/register" --> no login needed no jwt
router.post(
  "/register",
  [
    body("username", "Enter a valid username").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        success = false;
        return res.status(400).json({
          success,
          error: "sorry a user with this email already exist!",
        });
      }

      user = await User.findOne({ username: req.body.username });
      if (user) {
        success = false;
        return res.status(400).json({
          success,
          error: "sorry a user with this username already exist!",
        });
      }

      // MAIN WORK OF CREATING USER:
      const salt = await bcrypt.genSalt(10);
      securePass = await bcrypt.hash(req.body.password, salt);

      // creating new user in User Schema
      user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: securePass,
      });

      // jwt authentication
      const data = {
        user: {
          id: user.id,
          username: user.username,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET); //return a token
      success = true;
      res.json({ success, authtoken, user });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error!");
    }
  }
);

// LOGIN: POST /api/auth/login
router.post(
  "/login",
  [
    body("username", "Enter a valid username").exists(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;
    try {
      let user = await User.findOne({ username });
      if (!user) {
        const success = false;
        return res
          .status(400)
          .json({ success, error: "Try to login with correct credentials!" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        const success = false;
        return res
          .status(400)
          .json({ success, error: "Try to login with correct credentials!" });
      }

      // auth token has id inside it
      const data = {
        user: {
          id: user.id,
          username: user.username,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET); //return a token
      const success = true;
      res.json({ success, authtoken, user });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error!");
    }
  }
);

module.exports = router;
