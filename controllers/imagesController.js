const awsUploadImage = require("../utils/awsUploadImage");
const { v4: uuidv4 } = require("uuid");
const Images = require("./../models/Images");

exports.uploadImage = async (req, res) => {
  const { category } = req.body;
  const file = req.files.image;
  const fileExtension = file.mimetype.split("/")[1];
  file.name = `${category}/${uuidv4()}.${fileExtension}`;

  try {
    const imageUrl = await awsUploadImage(file.data, file.name);
    const registerImage = new Images({
      category,
      imageUrl,
    });

    await registerImage.save();

    return res.json({
      ok: true,
      registerImage,
    });
  } catch (error) {
    return res.json({
      ok: false,
      error: error.msg,
    });
  }
};

exports.getImagesByCategory = async(req, res) => {
  const { category } = req.body;

  try {
    const foundImages = await (await Images.find({ category })).entries;

    return res.json({
      ok: true,
      images: foundImages,
    });
  } catch (error) {
    return res.json({
      ok: false,
      error: "Ops, Ha ocurrido un error",
    });
  }
};

