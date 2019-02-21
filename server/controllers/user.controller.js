const User = require("../models/user/user");
const UserAdministrator = require("../models/user/userAdministrator");
const UserSupervisor = require("../models/user/userSupervisor");
const UserEmployee = require("../models/user/userEmployee");
const UserTrainee = require("../models/user/userTrainee");
const bcrypt = require("bcryptjs");
const keys = require("../config/keys");
const jwt = require("jsonwebtoken");

/**
 * Test route
 * GET api/users/test
 * @param  req
 * @param  res
 * @private
 */
function testRoute(req, res) {
  console.log(req.user);
  res.status(200).json({ message: "Users test" });
}

/**
 * Create user
 * POST api/users/test
 * @param  req
 * @param  res
 * @private
 */
function createUser(req, res) {
  User.findOne({ username: req.body.username }).then(user => {
    if (user) {
      return res.status(400).json({
        error: "Username already exists"
      });
    } else {
      const userData = {
        username: req.body.username,
        password: req.body.password
      };

      switch (req.body.role) {
        case "administrator":
          const newUser = new UserAdministrator(userData);

          bcrypt.genSalt(12, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;

              newUser.password = hash;
              newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            });
          });
      }
    }
  });
}

/**
 * Login user
 * POST api/users/login
 * @param  req
 * @param  res
 * @public
 */
function loginUser(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username: username }).then(user => {
    if (!user) {
      return res.status(404).json({ error: "Invalid login information" });
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, username: user.name };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 36000 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res.status(400).json({ error: "Invalid login information" });
      }
    });
  });
}

module.exports = {
  testRoute,
  createUser,
  loginUser
};
