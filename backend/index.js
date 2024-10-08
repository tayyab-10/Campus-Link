const connectToMongo = require('./db');
const express = require('express');
const errorMiddleware=require("./Middleware/Error");
const dotenv=require("dotenv");
const cors = require('cors');
const session = require("express-session");
const passport = require('passport');

connectToMongo()

dotenv.config({path:"backend/Config/config.env"});
const port=process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000', // frontend URL
    credentials: true // allow credentials (cookies, authorization headers, etc.)
  }));

  app.use(errorMiddleware);
  app.use(
    session({
      secret: "your-secret-key",
      resave: false,
      saveUninitialized: true,
    })
  );
  
  app.use(passport.initialize());
  app.use(passport.session());

//Available Routes 

app.use('/api/auth', require("./Routes/UserRoute"));


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})

