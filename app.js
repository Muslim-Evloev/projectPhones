import express from "express";
import path from "path";
import fileUpload from "express-fileupload";

import connectDB from "./src/config/db.js"
connectDB()

const PORT = 5000;
const app = express()
app.use(express.json())

app.listen(PORT, () => {
    console.log("Сервер успешно запущен на порту: " + PORT);
});