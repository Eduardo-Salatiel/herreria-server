const { validationResult, body } = require("express-validator");

const validateCategory = async (req, res, next) => {
  const rules = [
    body("category")
      .escape()
      .notEmpty()
      .withMessage("El campo categoria es obligatorio")
      .isString(),
  ];

  await Promise.all(rules.map((validation) => validation.run(req)));
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.json({
      ok: false,
      error: errors.errors[0].msg,
    });
  }
  next();
};

module.exports = {
    validateCategory
}
