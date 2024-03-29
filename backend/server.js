const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const connectDB = require("./config/db");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");

const app = express();
connectDB();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req,res) =>{
    res.send("api is running");
});



app.use('/api/users', require('./routes/router'));
app.use(notFound);
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));