import express from "express";
import 'dotenv/config.js';
import studentRouters from "./routers/StudentRoutes.js";
import bookRouters from "./routers/BookRoutes.js";
import UserRoutes from "./routers/UserRoutes.js";
import cors from 'cors';

//create express app
const app = express();

//enable cors to front-end
let corsOptions = {
    origin: process.env.ORIGIN
}

app.use((req, res, next) =>{
    console.log(req.path, req.method); 
    next();
})

//middleware
app.use(express.json());
app.use(cors(corsOptions));

const port = 3000;

try{
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Listnening to port ${process.env.PORT || 3000}...`);
    })
}catch(e){
    console.log(e);
}

app.use('/student', studentRouters);
app.use('/books', bookRouters);
app.use('/user', UserRoutes);





