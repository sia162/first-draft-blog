const router = require("express").Router();
const Category = require("../models/Category");

// user fetch to get data
const fetchuser = require("../middleware/jwtcheckfetch");

// new category: POST "/api/categories/"
router.post("/", async (req, res) => {
  try {
    DuplicateCat = await Category.findOne(req.body);

    if (!DuplicateCat) {
      const newCat = new Category(req.body);
      try {
        const savedcat = await newCat.save();
        res.status(200).json(savedcat);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
      }
    } else {
      res.status(400).send("this category already exists");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error!");
  }
});

// get all categories: GET "/api/categories/getallcategories"
router.get("/getallcategories", async (req, res) => {
  try {
    const allcategories = await Category.find();
    res.status(200).json(allcategories);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error!");
  }
});

module.exports = router;
