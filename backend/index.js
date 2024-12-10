








import express from 'express';
import router from './routes/routes.js';
import DBConnection from './database/db.js';
import cors from 'cors';

const app=express();
app.use(cors({
    origin:'http://localhost:5173'|| 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],}
));

app.use("/",router);


app.listen(3333,()=>{
    console.log("server is listening on route 3333");
});

DBConnection();