import express from "express";
import dotenv from "dotenv";
import router from "./routes/web.js"
import cors from "cors"

const app=express();
dotenv.config();

const PORT=process.env.PORT || 4000;
app.use(cors())

app.use("/",router);

app.listen(PORT,()=>{
    console.log(`server is starting at http://localhost:${PORT}`)
})
