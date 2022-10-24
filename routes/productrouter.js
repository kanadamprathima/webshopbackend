const Products = require("../models").product;
const express = require("express");

const { Router } = express;

const router = new Router();
router.get("/", async (req, res, next) => {
  try {
    const allProducts = await Products.findAll();
    res.send(allProducts);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const getById = await Products.findByPk({ id });
    res.send(getById);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
