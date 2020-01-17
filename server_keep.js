const express = require("express");
//const http = require("http"); //Experiment
const socketIo = require("socket.io");
const path = require("path");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const moment = require("moment");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");

//Load env vars
dotenv.config({ path: "./config/config.env" });

//Connect to database
connectDB();

const app = (exports.app = express());
//Experiment below
// const server = http.createServer(app);
// const io = socketIo(server);

//Use cors middleware
app.use(cors());

//Route files backend
const broadcasts = require("./routes/broadcasts");
const auth = require("./routes/auth");
const liveUpdates = require("./routes/liveUpdates");
//const liveMessages = require("./routes/liveMessages");
const users = require("./routes/users");
const sockets = require("./routes/sockets");

//Parse JSON
app.use(express.json());

//Cookie Parser
app.use(cookieParser());

//Dev logging middleware with morgan
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Express session midleware
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

//Mount Routers Backend
app.use("/api/v1/broadcasts", broadcasts);
app.use("/api/v1/auth", auth);
app.use("/api/v1/liveupdates", liveUpdates);
//app.use("/api/v1/livemessages", liveMessages);
app.use("/api/v1/users", users);
app.use("/sockets", sockets);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
});
