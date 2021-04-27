import express from "express";
import userRouter from "./UserServices/routes/user.js";
import { connectDB } from "./config/dbconfig.js";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });
const server = express();

server.use(express.json());

// connect to mongodb atlas
connectDB();

server.listen(process.env.PORT, () => {
  console.log(`Server Running on port ${process.env.PORT}`);
});

server.get("/", (req, res) => {
  res.send("Server is up and running!");
});

server.use("/api/users/", userRouter);
