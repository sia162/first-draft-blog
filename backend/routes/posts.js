const router = require("express").Router();
const Post = require("../models/Post");

// user fetch to get data
const fetchuser = require("../middleware/jwtcheckfetch");

// GET All POSTS present on site: GET "/api/posts/" --> /?user=/?categories=
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catname = req.query.cat;
  try {
    let posts;

    if (username) {
      posts = await Post.find({ username: username.toString() });
    } else if (catname) {
      posts = await Post.find({
        categories: {
          $in: [catname],
        },
      });
    } else {
      posts = await Post.find();
    }

    res.status(200).json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error!");
  }
});

// GET logged in USER'S all POST: GET "/api/posts/fetchposts" --> login needed
router.get("/fetchposts", fetchuser, async (req, res) => {
  try {
    let userId = req.user.id;
    const posts = await Post.find({ user: userId });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error!");
  }
});

// GET A POST: GET "/api/posts/post/:id" --> login needed
router.get("/:id", async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    let postNotFound = true;
    console.error(error.message);
    res.status(500).send({ postNotFound });
  }
});

// CREATE POST: POST "/api/posts/createpost" --> login needed
router.post("/createpost", fetchuser, async (req, res) => {
  try {
    let userId = req.user.id;
    let userName = req.user.username;
    const { title, desc, photo, categories } = req.body;

    // saving new note
    const post = new Post({
      title,
      desc,
      photo,
      categories,
      user: userId,
      username: userName,
    });

    const savedPost = await post.save();
    res.status(200).json(savedPost);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error!");
  }
});

// UPDATE POST: PUT "/api/posts/updatepost" --> login needed (id in params is of the post to tbe updated)
router.put("/updatepost/:id", fetchuser, async (req, res) => {
  const { title, desc, photo, categories } = req.body;

  try {
    const newPost = {};
    if (title) {
      newPost.title = title;
    }
    if (desc) {
      newPost.desc = desc;
    }
    if (photo) {
      newPost.photo = photo;
    }
    if (categories) {
      newPost.categories = categories;
    }

    let post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send("not found");
    }

    let userId = req.user.id;
    if (post.user.toString() !== userId) {
      return res.status(401).send("not allowed");
    }

    post = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: newPost },
      { new: true }
    );

    res.status(200).json({ post });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error!");
  }
});

// DELETE POST: DELETE "/api/posts/deletepost" --> login needed (id in params is of the post to tbe updated)
router.delete("/deletepost/:id", fetchuser, async (req, res) => {
  try {
    let userId = req.user.id;

    let post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send("post not found");
    }

    if (post.user.toString() !== userId) {
      return res.status(401).send("you can only delete your post. not allowed");
    }

    post = await Post.findByIdAndDelete(req.params.id);
    res.json({ success: "post has been delete", post: post });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error!");
  }
});

module.exports = router;
