const connectToMongo = require('./db');
const express = require('express');
const errorMiddleware=require("./Middlewares/Error");
const dotenv=require("dotenv");
const cors = require('cors');

connectToMongo()

dotenv.config({path:"backend/Config/config.env"});
const port=process.env.PORT;

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // frontend URL
    credentials: true // allow credentials (cookies, authorization headers, etc.)
  }));

  app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})

