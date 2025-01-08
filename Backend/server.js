import express from 'express';
import cors from 'cors';
import { connecttdb } from './config/db.js';
import foodRouter from './routes/Foodroutes.js';
import userRouter from './routes/userRoutes.js';
import 'dotenv/config'
import cartRouter from './routes/cartroutes.js';
import orderRouter from './routes/OrderRoutes.js';
const app = express();
const port = process.env.port||4000;

app.use(express.json());
app.use(cors());
connecttdb();

// api endpoints
app.use("https://platter-palooza-7r9r.vercel.app/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("https://platter-palooza-7r9r.vercel.app/user", userRouter)
app.use("https://platter-palooza-7r9r.vercel.app/cart",cartRouter)
app.get("/", (req, res) => {
    res.send("API working");
});
app.use("https://platter-palooza-7r9r.vercel.app/order",orderRouter)

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
