import express from 'express';
import connectDB from './config/db.js';
import bodyParser from 'body-parser';
import cors from 'cors'

//ROUTE
import productRoute from './routes/product-route.js';

connectDB()
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/api/product', productRoute);

export default app;