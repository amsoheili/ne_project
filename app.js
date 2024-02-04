var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const adminRouter = require("./routes/admin");
const bodyParser = require("body-parser");
const { connectToDatabase, test } = require("./database");

// const runQuery = async () => {
//   await connectToDatabase();
//   test();
// };

let indexRouter = require("./routes/index");

var app = express();
// runQuery();

app.use(bodyParser.json());

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
