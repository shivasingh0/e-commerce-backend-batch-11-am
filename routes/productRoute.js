import express from "express";
import { addProduct, deleteProduct, displayProduct, singleProduct, updateProduct } from "../controllers/productController.js";

const router = express.Router();

router.post("/addProduct", addProduct)
router.get("/displayProduct", displayProduct)
router.get("/:id", singleProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

export default router;