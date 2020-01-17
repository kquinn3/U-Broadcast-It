const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const geocoder = require("../utils/geocoder");
const Broadcast = require("../models/Broadcast");

// @desc    Get all broadcasts
// @route   GET /api/v1/broadcasts
// @access  Public
exports.getBroadcasts = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc    Get single broadcast
// @route   GET /api/v1/broadcasts/:id
// @access  Public
exports.getBroadcast = asyncHandler(async (req, res, next) => {
  const broadcast = await Broadcast.findById(req.params.id).populate(
    "liveUpdates liveMessages"
  );
  if (!broadcast) {
    return next(
      new ErrorResponse(`Broadcast not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: broadcast });
  //res.status(200).json(res.advancedResults);
});

// @desc    Create new broadcast
// @route   POST /api/v1/broadcasts
// @access  Private
exports.createBroadcast = asyncHandler(async (req, res, next) => {
  // Add user to req.body
  req.body.user = req.user.id;
  //req.body.createUrl=`/broadcasts/${this.slug}`
  const broadcast = await Broadcast.create(req.body);
  res.status(201).json({ success: true, data: broadcast });
});

// @desc    Update broadcast
// @route   PUT /api/v1/broadcasts/:id
// @access  Private
exports.updateBroadcast = asyncHandler(async (req, res, next) => {
  let broadcast = await Broadcast.findById(req.params.id);
  if (!broadcast) {
    return next(
      new ErrorResponse(`Broadcast not found with id of ${req.params.id}`, 404)
    );
  }
  //Make sure the user owns the broadcast
  if (broadcast.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorized to edit this Broadcast`,
        404
      )
    );
  }

  broadcast = await Broadcast.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({ success: true, data: broadcast });
});

// @desc    Delete broadcast
// @route   DELETE /api/v1/broadcasts/:id
// @access  Private
exports.deleteBroadcast = asyncHandler(async (req, res, next) => {
  const broadcast = await Broadcast.findById(req.params.id);
  if (!broadcast) {
    return next(
      new ErrorResponse(`Broadcast not found with id of ${req.params.id}`, 404)
    );
  }

  //Make sure the user owns the broadcast
  if (broadcast.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorized to delete this Broadcast`,
        404
      )
    );
  }

  broadcast.remove();
  res.status(200).json({ success: true, data: {} });
});

// @desc    Get broadcasts within a radius
// @route   GET /api/v1/broadcasts/:radius/:distance
// @access  Private
exports.getBroadcastsInRadius = asyncHandler(async (req, res, next) => {
  const { zipcode, distance } = req.params;

  //Get lat/lng from geocoder
  const loc = await geocoder.geocode(zipcode);
  const lat = loc[0].latitude;
  const lng = loc[0].longitude;

  //Calc radius using radians
  //Divide distance by radius of Earth
  //Earth Radius=3,963 miles / 6378 km
  const radius = distance / 3963;
  const broadcasts = await Broadcast.find({
    location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } }
  });
  res.status(200).json({
    success: true,
    count: broadcasts.length,
    data: broadcasts
  });
});
