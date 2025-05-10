require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
 
const app = express();

app.use(express.json());

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : [];

app.use(
  cors({
    origin: function (origin, callback) {
      if (
        allowedOrigins.length === 0 ||
        allowedOrigins.indexOf(origin) !== -1 ||
        !origin
      ) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);


app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ limit: "5gb", extended: true }));
app.use(express.json({ limit: "5gb" }));

app.use("/public", express.static("public"));


const fileRoutes = require("./route/fileRoutes");

app.get('/', (req, res) => {
  res.send('Api is running successfully .....');
})

app.use("/api", fileRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;