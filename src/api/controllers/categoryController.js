const { Category } = require("../models");

const addCategory = async (req, res) => {
  try {
    const { name, img, description } = req.body;
    const category = await Category.create({ name, img, description });
    res.json({ category });
  } catch (err) {
    res.status(404).json({ errors: [err.message.split(",")] });
  }
};
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, img, description } = req.body;
    const category = await Category.updateOne(
      { _id: id },
      { name, img, description }
    );
    res.json({ category });
  } catch (err) {
    res.status(404).json({ errors: [err.message.split(",")] });
  }
};
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.deleteOne({ _id: id });
    res.json({ category });
  } catch (err) {
    res.status(404).json({ errors: [err.message.split(",")] });
  }
};
const fetchCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findOne({ _id: id });
    res.json({ category });
  } catch (err) {
    res.status(404).json({ errors: [err.message.split(",")] });
  }
};
const fetchAllCategory = async (req, res) => {
  try {
    const category = await Category.find();
    res.json({ category });
  } catch (err) {
    res.status(404).json({ errors: [err.message.split(",")] });
  }
};

module.exports = {
  addCategory,
  updateCategory,
  deleteCategory,
  fetchCategory,
  fetchAllCategory,
};
