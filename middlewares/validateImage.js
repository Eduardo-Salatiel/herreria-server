const validateImage = (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.json({
      ok: false,
      error: "Error, adjunte una imagen",
    });
  }

  const file = req.files.image;
  const fileExtension = file.mimetype.split("/")[1];
  const validExtensions = ["jpg", "jpeg", "png"];

  if (!validExtensions.includes(fileExtension)) {
    return res.json({
      ok: false,
      error: "Extensión de archivo invalida",
    });
  }
  next();
};

module.exports = validateImage;
