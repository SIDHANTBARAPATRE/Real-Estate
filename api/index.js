import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"; // router changed---> userRouter
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to MongoDB");
}).catch((err) => {
    console.log(err);
})


const app = express();

app.listen(3000, () => {
    console.log("server is running on port 3000")
});

app.use("/api/user", userRouter); /// api/user- is not a folder path

