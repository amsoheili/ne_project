var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require('cors');
const adminRouter = require("./routes/admin");
const bodyParser = require("body-parser");
const { connectToDatabase, test } = require("./database");

let indexRouter = require("./routes/index");

var app = express();

app.use(bodyParser.json());

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests from the specified origin or allow all origins with a wildcard '*'
    const allowedOrigins = ['http://127.0.0.1:5500', 'http://localhost:5500'];
    const isAllowedOrigin = allowedOrigins.includes(origin) || !origin;
    callback(null, isAllowedOrigin);
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: 'Authorization,Content-Type',  // Include other headers as needed
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send();
});

module.exports = app;
