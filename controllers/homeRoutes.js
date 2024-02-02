const router = require("express").Router();
const { Post, User, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
      order: [['createdAt', 'DESC']],  
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render("home", { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/posts/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [User, { model: Comment, include: [User] }],
    });
    const post = postData.get({ plain: true });
    res.render("post", { ...post });
  } catch (error) {
    res.status(500).json(err);
  }
});


router.get("/login", async (req, res) => {
   try {
     res.render("login");
   } catch (err) {
     res.status(500).json(err);
   }
 });
 router.get("/dashboard", async (req, res) => {
   try {
     res.render("dashboard");
   } catch (err) {
     res.status(500).json(err);
   }
 });
 router.get("/signup", async (req, res) => {
   try {
     res.render("create");
   } catch (err) {
     res.status(500).json(err);
   }
 });
 router.get("/logout", async (req, res) => {
   try {
     res.render("logout");
   } catch (err) {
     res.status(500).json(err);
   }
 });

 module.exports = router;
