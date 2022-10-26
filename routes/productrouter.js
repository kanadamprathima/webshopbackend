const Products = require("../models").product;
const express = require("express");

const { Router } = express;

const router = new Router();
router.get("/", async (req, res, next) => {
  const limit = req.query.limit || 5;
  const offset = req.query.offset || 0;
  try {
    const result = await Products.findAndCountAll({ limit, offset });
    res.send({ products: result.rows, total: result.count });
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const getById = await Products.findByPk(id);
    res.send(getById);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
