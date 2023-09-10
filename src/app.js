import express from 'express';
import "express-async-errors"
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/index.routes.js';
import errorHandler from './middlewares/error.middleware.js';

dotenv.config();

const PORT = process.env.SERVER_PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler)

app.listen(PORT, ()=>{
    console.log(`Server online, running on port: ${PORT}`)
});