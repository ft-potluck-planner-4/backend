const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const users = require("./auth-model");
const { jwtSecret } = require("../config/secrets");

router.post("/register", async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).json({ message: "username and password required" });
  } else {
    try {
      let findUser = await users.getByUsername(req.body.username);
      if (findUser != null) {
        res.status(400).json({ message: "username already registered" });
      } else {
        let bcryptP = bcrypt.hashSync(req.body.password, 8);
        await users.add({
          username: req.body.username,
          password: bcryptP,
        });
        const newUser = await users.getByUsername(req.body.username);
        res.status(201).json(newUser);
      }
    } catch (err) {
      res.status(500).json({ message: "Error, Something Bad happened!" });
    }
  }
});

router.post("/login", async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res
      .status(400)
      .json({ message: "Please enter both Username and Password" });
  } else {
    try {
      const User = await users.getByUsername(req.body.username);
      if (User != null) {
        let verifyPassword = bcrypt.compareSync(
          req.body.password,
          User.password
        );
        if (verifyPassword) {
          jwt.sign({ username: User.username }, jwtSecret, (err, token) => {
            if (err) {
              res.status(500).json({ message: "error trying to login" });
            } else {
              res.status(200).json({ message: `Hi, ${User.username}!`, token });
            }
          });
        } else {
          res.status(400).json({ message: "invalid credentials" });
        }
      } else {
        res.status(400).json({ message: "invalid credentials" });
      }
    } catch (err) {
      res.status(500).json({ message: "Error, Something Bad happened!" });
    }
  }
});

module.exports = router;
