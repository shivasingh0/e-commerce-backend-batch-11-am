import express from "express";
import { addProduct, deleteProduct, displayProduct, singleProduct, updateProduct } from "../controllers/productController.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.post("/addProduct", upload.single("productImage") ,addProduct)
router.get("/displayProduct", displayProduct)
router.get("/:id", singleProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

export default router;