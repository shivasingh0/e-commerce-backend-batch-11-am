import Product from "../models/productsModel.js";

// add product controller
export const addProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);

    const result = await newProduct.save();

    res.status(201).json(result);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ msg: error.message });
  }
};

// display product controller
export const displayProduct = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length > 0) {
      res.status(200).json(products);
    } else {
      res.status(404).json({ msg: "No products found" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ msg: error.message });
  }
};

// single product controller
export const singleProduct = async (req, res) => {
  console.log(`req`, req);
  console.log(`req.params.id`, req.params.id);
  try {
    const result = await Product.findOne({_id: req.params.id})

    if (result) {
      res.status(200).json(result)
    } else {
      res.status(404).json({ msg: "No products found" });
    }

  } catch (error) {
    console.error(error.message);
    res.status(400).json({ msg: error.message });
  }
}
