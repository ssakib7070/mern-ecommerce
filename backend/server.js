import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";

const PORT = process.env.PORT || 5000;
const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running.....");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(PORT, console.log(`Server running on PORT ${PORT}`));
