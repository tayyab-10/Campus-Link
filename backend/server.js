const connectToMongo = require('./db');
const express = require('express');
const errorMiddleware=require("./Middleware/Error");
const dotenv=require("dotenv");
const cors = require('cors');

connectToMongo()

dotenv.config({path:"backend/Config/config.env"});
const port=process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Available Routes 

app.use('/api/auth', require("./Routes/UserRoute"));

app.use(cors({
    origin: 'http://localhost:3000', // frontend URL
    credentials: true // allow credentials (cookies, authorization headers, etc.)
  }));

  app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})

