const router = require("express").Router();
const models = require("./auth-model");
const {
  checkEmailExists,
  checkEmailFree,
  validateRegisterCred,
  validateLoginCred,
} = require("../middleware/auth-middleware");

const tokenBuilder = require("./token-builder");
const bcrypt = require("bcryptjs");
const User = require("./auth-model");

router.get("/test", (req, res) => {
  res.status(200).json({ message: "this is a test endpoint" });
});

router.get("/:id", async (req, res) => {
  const result = await models.findById(req.params.id);
  res.status(200).json(result);
});

router.post(
  "/register",
  validateRegisterCred,
  checkEmailFree,
  (req, res, next) => {
    let user = req.body;
    const rounds = process.env.BCRYPT_ROUNDS || 8; // 2 ^ 8
    const hash = bcrypt.hashSync(user.password, rounds);
    user.password = hash;

    User.addNewUser(user)
      .then((unknownResult) => {
        res.status(201).json(unknownResult);
      })
      .catch(next);
  }
);

router.post("/login", validateLoginCred, checkEmailExists, (req, res, next) => {
  let { password } = req.body;
  const user = req.body.foundUser;

  if (bcrypt.compareSync(password, user.password)) {
    const token = tokenBuilder(user);
    res.status(200).json({
      message: `welcome, ${user.first_name}`,
      token,
    });
  } else {
    next({ status: 401, message: "invalid password" });
  }
});

router.get("/logout", (req, res, next) => {
  req.headers.authorization.destroy((err) => {
    if (err) {
      res.json({
        message: "An error occurred logging out. Please try again.",
      });
    } else {
      res.json({
        message: "Logout successful",
      });
    }
  });
});

module.exports = router;
