import express from "express";
const route = express.Router();

// CONTROLLERS
import { createProduct, deleteProduct, getOneProduct, getProducts, updateProduct} from '../controller/productController.js'

route.get("/", getProducts)
route.post("/", createProduct)
route.get("/:id", getOneProduct)
route.patch("/:id", updateProduct)
route.delete("/:id", deleteProduct)


export default route;