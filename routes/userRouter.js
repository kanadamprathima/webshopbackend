const { Router } = require("express");
const { toJWT } = require("../auth/jwt");

const User = require("../models").user;
const authMiddleware = require("../auth/middleware");
const router = new Router();

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({
      message: "Please supply a valid email and password",
    });
  }
  const userToLogin = await User.findOne({ where: { email: email } });
  if (userToLogin) {
    if (password === userToLogin.password) {
      const data = { userId: userToLogin.id };
      console.log("Data", data);
      const token = toJWT(data);
      res.send({ token: token });
      console.log(token);
    } else {
      res.status(400).send("Email or password not found");
    }
  }
});

router.get("/", async (request, response, next) => {
  console.log(User, "here");
  try {
    const users = await User.findAll();
    response.send(users);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.post("/signup", async (req, res, next) => {
  const newUser = req.body;
  if (!newUser.email || !newUser.password || !newUser.name) {
    return res
      .status(400)
      .send("You must specify an email, password, and name");
  }

  try {
    const createdUser = await User.create(newUser);
    res.json(createdUser);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
