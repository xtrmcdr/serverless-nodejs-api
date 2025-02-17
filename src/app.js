const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello orang kampung dari root!",
    DEBUG: process.env.DEBUG === 1 || `${process.env.DEBUG}` === `1`,
    DATABASE_URL: process.env.DATABASE_URL
      ? process.env.DATABASE_URL
      : "not here",
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

// app.listen(3000, () => {
//   console.log("listening on port http://localhost:3000");
// });

exports.handler = serverless(app);
