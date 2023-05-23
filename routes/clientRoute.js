import express from "express";
import { getProducts } from "../controllers/clientController.js";
import {
  getCustomers,
  getTransaction,
} from "../controllers/customerController.js";
const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransaction);

export default router;
