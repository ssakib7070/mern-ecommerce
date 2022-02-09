import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("API is running.....");
});

// app.use(notFound);

// app.use(errorHandler);

app.use("/api/products", productRoutes);

app.listen(PORT, console.log(`Server running on PORT ${PORT}`));
