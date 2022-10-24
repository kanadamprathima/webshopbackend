const Products = require("./models").product;
const categories = require("./models").category;
const getCategory = async () => {
  const allcats = await categories.findAll({ raw: true, include: [Products] });
  console.log(allcats);
};
// getCategory();

const getProducts = async () => {
  const allProducts = await Products.findAll({ raw: true });
  console.log(allProducts);
};
getProducts();
