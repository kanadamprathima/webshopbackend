const express = require("express");

const categories = require("./models").category;
const Products = require("./models").product;
const productRouter = require("./routes/productrouter");
const app = express();
const PORT = 4000;
app.use(express.json());
app.use("/products", productRouter);

app.get("/category", async (req, res, next) => {
  const allcategory = await categories.findAll({ raw: true });
  res.send(allcategory);
});

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
