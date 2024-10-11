import express from "express"
import { configDotenv } from "dotenv"
import ConnectDb from "./src/config/db.js";
configDotenv();

const app = express();


ConnectDb();
app.listen(process.env.PORT , ()=>{
    console.log(`Server is running on ${process.env.PORT}`
    );
    
})