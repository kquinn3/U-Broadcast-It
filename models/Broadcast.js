const mongoose = require("mongoose");
const slugify = require("slugify");
const geocoder = require("../utils/geocoder");

const BroadcastSchema = new mongoose.Schema(
  {
    sport: {
      type: String,
      required: [true, "Please add an eventType"],
      trim: true,
      maxLength: [50, "eventType can not be more than 30 characters"]
    },
    name: {
      team1: {
        type: String,
        required: [true, "Please enter the name of team1"],
        trim: true,
        maxLength: [30, "Must be 30 characters or less"]
      },
      team2: {
        type: String,
        required: [true, "Please enter the name of team2"],
        trim: true,
        maxLength: [30, "Must be 30 characters or less"]
      }
    },
    slug: String,
    address: {
      type: String,
      required: [true, "Please add an address"]
    },
    location: {
      //GeoJSON Point
      type: {
        type: String,
        enum: ["Point"],
        required: false
      },
      coordinates: {
        type: [Number],
        required: false,
        index: "2dsphere"
      },
      formattedAddress: String,
      street: String,
      city: String,
      state: String,
      zipcode: String,
      country: String
    },
    eventTime: {
      type: Date,
      default: Date.now()
    },
    status: {
      type: String,
      required: true,
      enum: ["scheduled", "active", "completed"],
      default: "scheduled"
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

//Create bootcamp slug from the names
BroadcastSchema.pre("save", function(next) {
  console.log("Slugify ran", this.name.team1);
  this.slug = slugify(`${this.name.team1}_${this.name.team2}`, { lower: true });
  next();
});

//Geocode & create location field
BroadcastSchema.pre("save", async function(next) {
  //console.log(this.address);
  const loc = await geocoder.geocode(this.address);
  //console.log(loc);
  this.location = {
    type: "Point",
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress,
    street: loc[0].streetName,
    city: loc[0].city,
    state: loc[0].stateCode,
    zipcode: loc[0].zipCode,
    country: loc[0].countryCode
  };
  //Do not save address in DB
  this.address = undefined;
  next();
});

//Reverse populate with virtuals
BroadcastSchema.virtual("liveUpdates", {
  ref: "LiveUpdate",
  localField: "_id",
  foreignField: "broadcast",
  justOne: false
});

//Reverse populate with virtuals
BroadcastSchema.virtual("liveMessages", {
  ref: "LiveMessage",
  localField: "_id",
  foreignField: "broadcast",
  justOne: false
});

//Cascade delete liveUpdates when a broadcast is deleted
BroadcastSchema.pre("remove", async function(next) {
  //  console.log(`LiveUpdates being remove from ${this._id}`);
  await this.model("LiveUpdate").deleteMany({ broadcast: this._id });
  await this.model("LiveMessage").deleteMany({ broadcast: this._id });
  next();
});

module.exports = mongoose.model("Broadcast", BroadcastSchema);
