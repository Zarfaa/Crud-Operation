import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import mongoose from 'mongoose';
import verifyAccessToken from './middlewares/VerifyAccessToken';
import AuthRouter from './router/auth';
import itemsRouter from "./router/items"


const app = express();

app.use(express.json());
app.use("/auth", AuthRouter);
app.use(verifyAccessToken)
app.use("/items", itemsRouter);
mongoose.connect(process.env.MONGO_URI!)
  .then(() => {
    app.listen(4000, () => {
      console.log("Server running on port 4000");
    })
  })
  .catch(err => {
    console.log("error");
  })
