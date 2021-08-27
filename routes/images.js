const express = require("express");
const app = express.Router();
const imagesController = require("./../controllers/imagesController");
const { validateCategory } = require("./../middlewares/validateBody");
const validateImage = require("./../middlewares/validateImage");

app.post(
  "/upload-image",
  [validateImage],
  imagesController.uploadImage
);

app.get(
  "/get-category-images",
  validateCategory,
  imagesController.getImagesByCategory
);

module.exports = app;
