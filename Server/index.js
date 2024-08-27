import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { dbconnect } from "./mongo/dbconnection.js";

const app = express()

dotenv.config()

app.use(express.json())
app.use(morgan("combined"))
import taskroutes from "./routes/Task.route.js"
import userroutes from "./routes/User.route.js"
dbconnect();
app.use("/Task", taskroutes)
app.use("/User", userroutes)

app.listen(process.env.PORT, () =>{})