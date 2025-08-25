import express from 'express';
import dbConnect from './config/dbConfig.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express()
app.use(express.json());
dbConnect()
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT || 5000}`)
})
