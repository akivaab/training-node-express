const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController");
const Post = require("../models/Post");

router
  .route("/")
  .get(postsController.getAllPosts)
  .post(postsController.createPost);

router
  .route("/:id")
  .get(postsController.getPost)
  .put(postsController.updatePost)
  .delete(postsController.deletePost);

module.exports = router;
