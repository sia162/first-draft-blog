var jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

// middleware --> called everytime when user logs in
const fetchuser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "please authenticate using a valid token" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res
      .status(401)
      .send({ error: "please authenticate using a valid token 2" });
  }
};

module.exports = fetchuser;
