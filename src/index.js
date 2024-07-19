import express from "express";
import { PORT } from "./config/serverConfig.js";


const app = express();


app.listen(PORT, ()=>{
    console.log(`Server start running at Port:`,PORT);
})