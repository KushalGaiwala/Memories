import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  const { page } = req.query;

  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT;
    const total = await PostMessage.countDocuments({});

    console.log("Initialising...");
    const postMessages = await PostMessage.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);
    console.log("Initialised!");

    res.status(200).json({
      data: postMessages,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPostsBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query;

  try {
    console.log("Searching...");
    const title = new RegExp(searchQuery, "i");
    const postMessages = await PostMessage.find({
      $or: [{ title }, { tags: { $in: tags.split(",") } }],
    });
    console.log(postMessages);
    console.log("Searched!");

    res.status(200).json({ data: postMessages });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  console.log("Creating...");
  const post = req.body;
  const newPost = new PostMessage({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPost.save();
    console.log("Created");

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getPostById = async (req, res) => {
  const { id: _id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No post with that ID");

    const post = await PostMessage.findById(`${_id}`);

    res.status(201).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  console.log("Updating...");
  try {
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No post with that ID");

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
      new: true,
    });

    res.json(updatedPost);
    console.log("Updated");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  console.log("Deleting...");
  try {
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No post with that ID");

    await PostMessage.findByIdAndRemove(_id);

    console.log("Deleted");
    res.json({ _id, message: "Post deleted successfully!" });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = async (req, res) => {
  const { id: _id } = req.params;

  console.log("Liking");
  try {
    if (!req.userId)
      return res.status(404).json({ message: "Unauthenticated" });

    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No post with that ID");

    const post = await PostMessage.findById(_id);

    const index = post.likes.findIndex((id) => id === String(req.userId));

    if (index === -1) {
      post.likes.push(req.userId);
    } else {
      post.likes = post.likes.filter((id) => id !== String(req.userId));
    }

    const likedPost = await PostMessage.findByIdAndUpdate(_id, post, {
      new: true,
    });

    console.log("Liked");
    res.json(likedPost);
  } catch (error) {
    console.log(error);
  }
};
