import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"; // router changed---> userRouter
import authRouter from "./routes/auth.route.js";
dotenv.config();


mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to MongoDB");
}).catch((err) => {
    console.log(err);
})


const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("server is running on port 3000")
});

app.use("/api/user", userRouter); /// api/user- is not a folder path
app.use("/api/auth", authRouter);

