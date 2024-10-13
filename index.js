const connectToMongo = require("./db");
const express = require("express");
const errorMiddleware = require("./Middleware/Error");
const dotenv = require("dotenv");
const cors = require("cors");

connectToMongo();

dotenv.config({ path: "backend/Config/config.env" });
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});
// CORS Configuration
const allowedOrigins = process.env.FRONTEND_URL.split(","); // Split the comma-separated list

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) !== -1) {
        // If the origin is in the allowed list, allow it
        callback(null, true);
      } else {
        // Otherwise, block the request
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

app.use(errorMiddleware);

//Available Routes

app.use("/api/auth", require("./Routes/UserRoute"));

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
