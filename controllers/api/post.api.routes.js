const express = require("express");
const router = express.Router();
const { Post } = require("../../models");

// Route to get all posts, ordered by creation date in descending order
router.get("/", async (req, res) => {
  try {
    const payload = await Post.findAll({
      order: [['createdAt', 'DESC']], // Order by creation date in descending order
    });
    res.status(201).json({ status: "success", payload });
  } catch (err) {
    res.status(401).json({ status: "error", payload: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const payload = await Post.findByPk(req.params.id);
    res.status(201).json({ status: "success", payload });
  } catch (err) {
    res.status(401).json({ status: "error", payload: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const payload = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(201).json({ status: "success", payload });
  } catch (err) {
    res.status(401).json({ status: "error", payload: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const payload = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ status: "success", payload });
  } catch (err) {
    res.status(401).json({ status: "error", payload: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const payload = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ status: "success", payload });
  } catch (err) {
    res.status(401).json({ status: "error", payload: err.message });
  }
});

module.exports = router;
