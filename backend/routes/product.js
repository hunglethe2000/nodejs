import express from "express";
import {
  list,
  create,
  productById,
  read,
  remove,
  update,
} from "../controllers/product";

const router = express.Router();

//add product
router.post("/products", create);

//list product
router.get("/products", list);

//update product
router.put("/product/:productId", update);

//delete product
router.delete("/product/:productId", remove);

//detail product
router.param("productId", productById);
router.get("/product/:productId", read);
module.exports = router;
