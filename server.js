const express = require("express");
const session = require("express-session");
const socket = require("socket.io");
//const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const cors = require("cors");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");

//Load env vars

//dotenv.config({ path: "./config/config.env" });

//Connect to database
connectDB();

const app = express();

//Use cors middleware
app.use(cors());

//Route files backend
const broadcasts = require("./routes/broadcasts");
const auth = require("./routes/auth");
const liveUpdates = require("./routes/liveUpdates");
const liveMessages = require("./routes/liveMessages");
const users = require("./routes/users");

//Parse JSON
app.use(express.json());

//Cookie Parser
app.use(cookieParser());

//Dev logging middleware with morgan
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent cross site scripting attacks
app.use(xss());

// Rate limiting
const limiter = rateLimit({
  windowMS: 60 * 1000, // 1 minute
  max: 60
});
app.use(limiter);

// Enable CORS
//app.use(cors());

//Prevent http param polution
app.use(hpp());

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
app.use("/api/v1/livemessages", liveMessages);
app.use("/api/v1/users", users);

app.use(errorHandler);

// Serve static assets in production

app.use(express.static(path.join(__dirname, "client/build")));
app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "client/build", "index.html"))
);

const PORT = process.env.PORT || 5001;

const server = (exports.server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
));

const { openSocket } = require("./sockets/openSocket");
//5de528203574e100d52756c6
const io = socket(server);
openSocket(io);

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
});
