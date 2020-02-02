const crypto = require("crypto"); //Generate token and hash it
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"]
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    match: [/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Please add a valid email"]
  },
  role: {
    type: String,
    enum: ["user", "broadcaster"],
    default: "user"
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    select: false
  },

  team: {
    type: String,
    default: "No Team"
  },

  zipcode: {
    type: String,
    favoritematch: [/^[0-9]{5}$/],
    default: "11111"
  },
  radius: {
    type: Number,
    default: 25
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
  CreatedAt: {
    type: Date,
    default: Date.now
  }
});

//Encrypt password using bcrypt
UserSchema.pre("save", async function(next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function() {
  return jwt.sign({ id: this._id }, config.JWT_SECRET, {
    expiresIn: config.JWT_EXPIRE
  });
};

//Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//Generate and hash password token
UserSchema.methods.getResetPasswordToken = function() {
  //Generate token
  const resetToken = crypto.randomBytes(20).toString("hex");

  //Hash token and set to resetPasswordToken field
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  //Set expire
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model("User", UserSchema);
