import express from "express";
import { addProduct, displayProduct, singleProduct } from "../controllers/productController.js";

const router = express.Router();

router.post("/addProduct", addProduct)
router.get("/displayProduct", displayProduct)
router.get("/:id", singleProduct)

export default router;