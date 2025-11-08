import express from "express";
import 'dotenv/config.js';
import studentRouters from "./routers/StudentRoutes.js";

//create express app
const app = express();

//middleware
app.use(express.json());

const port = 3000;

try{
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Listnening to port ${process.env.PORT || 3000}...`);
    })
}catch(e){
    console.log(e);
}

app.use('/student', studentRouters);