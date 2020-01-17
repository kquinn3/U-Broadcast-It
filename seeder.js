const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

//Load env variables
dotenv.config({ path: "./config/config.env" });

//Load models
//const Broadcast = require("./models/Broadcast");
const User = require("./models/User");
const LiveUpdate = require("./models/LiveUpdate");
//const LiveMessage = require("./models/LiveMessage");

//Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

//Read JSON files
//const broadcasts = JSON.parse(
//  fs.readFileSync(`${__dirname}/_data/broadcasts.json`, "utf-8")
//);

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/users.json`, "utf-8")
);

const liveUpdates = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/liveUpdates.json`, "utf-8")
);

//const liveMessages = JSON.parse(
//  fs.readFileSync(`${__dirname}/_data/liveMessages.json`, "utf-8")
//);

// Import into DB
const importData = async () => {
  try {
    //    await Broadcast.create(broadcasts);
    //  await User.create(users);
    await LiveUpdate.create(liveUpdates);
    //    await LiveMessage.create(liveMessages);
    console.log("Data Imported...".green.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    //    await Broadcast.deleteMany();
    await User.deleteMany();
    await LiveUpdate.deleteMany();
    //    await LiveMessage.deleteMany();
    console.log("Data Destroyed...".red.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
