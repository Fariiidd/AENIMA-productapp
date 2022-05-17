import express from 'express';
import connectDB from './config/db.js';


//ROUTE
import productRoute from './routes/product-route.js';

connectDB()
const app = express();

app.use('/api/product', productRoute);

export default app;