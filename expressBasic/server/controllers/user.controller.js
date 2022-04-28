const { User } = require('../models/user.model');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
  }
};

const createUsers = async (req, res) => {
  try {
    const { name, email } = req.body;

    const newUser = await User.create({ name, email });

    res.status(201).json({ newUser });
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  try {
    //const { id } = req.params; // { id }
    const { user } = req;
    // SELECT * FROM users WHERE id=?
    // const user = await User.findOne({ where: { id } });

    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { user } = req;
    // const { id } = req.params;
    const { name } = req.body;

    // await User.update({ name }, { where: { id } });
    // const user = await User.findOne({ where: { id } });

    await user.update({ name });

    res.status(200).json({ status: 'sucess' });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    // const { id } = req.params; // { id }
    const { user } = req;
    // SELECT * FROM users WHERE id=?
    // const user = await User.findOne({ where: { id } });

    // DELETE FROM ...
    // await user.destroy();
    await user.update({ status: 'deleted' });

    res.status(200).json({ status: 'sucess' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  createUsers,
  getUserById,
  updateUser,
  deleteUser,
};
