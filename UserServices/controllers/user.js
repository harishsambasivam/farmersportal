import User from "../models/user.js";

export const addUser = async (req, res, next) => {
  console.log(req.body);
  try {
    const user = new User(req.body);
    user.save();
    return res.status(200).send({
      sucess: true,
      data: user,
    });
  } catch (err) {
    console.log(err);
    res.status(501).json({
      error: "Server error",
    });
  }
};

export const getUser = async (req, res) => {
  getUser1("email", function (error, user) {
    if (error) return console.log(err);
    console.log(user);
  });
};

const getUser1 = (email, callback) => {
  var query = {};
  User.find(query, callback);
};
