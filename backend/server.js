import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("API is running.....");
});

// app.use(notFound);

// app.use(errorHandler);

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, console.log(`Server running on PORT ${PORT}`));
