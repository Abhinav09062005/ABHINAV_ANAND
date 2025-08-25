import express from 'express';
import dbConnect from './config/dbConfig.js';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'
import postRoutes from './routes/postRoutes.js'
dotenv.config();
const app = express()
app.use(express.json());
dbConnect()

app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api", postRoutes);

app.get("/", (req, res) => {
  res.send("api is running");
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT || 5000}`)
})








