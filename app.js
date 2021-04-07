require("dotenv").config();
import mongoose from "mongoose" 
import express from "express";
import ROUTES from "./constants/routes";
import connectDatabase from './connectDB';

const app = express();

connectDatabase();

app.use(express.json());

app.listen(3000, () => {
    console.log("port running on 3000")
});
app.use("/laptopRouter",ROUTES.LAPTOP);
app.use("/user",ROUTES.USER);

console.log(process.env.MONGO_URI)





