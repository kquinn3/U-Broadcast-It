const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const LiveUpdate = require("../models/LiveUpdate");
const Broadcast = require("../models/Broadcast");

//Added For live update services
//const registerService = require("../services/GameUpdateService");

////For liveUpdates
//const LiveUpdateService = require('../../LiveUpdateService');

// @desc    Get all liveUpdates for a broadcast
// @route   GET /api/v1/liveUpdates/:broadcastID
// @access  Public
exports.getLiveUpdatesByBroadcastId = asyncHandler(async (req, res, next) => {
  const broadcast = await Broadcast.findById(req.params.id);
  if (!broadcast) {
    return next(
      new ErrorResponse(`Broadcast not found with id of ${req.params.id}`, 404)
    );
  }
  const liveUpdates = await LiveUpdate.find({ broadcast: req.params.id }).sort({
    createdAt: -1
  });

  res
    .status(200)
    .json({ success: true, count: liveUpdates.length, data: liveUpdates });
});

// @desc    Create new liveUpdate
// @route   POST /api/v1/liveUpdates
// @access  Private
exports.createLiveUpdate = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;
  //Check that the broadcast exists
  const broadcast = await Broadcast.findById(req.body.broadcast);
  if (!broadcast) {
    return next(
      new ErrorResponse(
        `Broadcast not found with id of ${req.body.broadcast}`,
        404
      )
    );
  }
  //Check that the broadcast of the liveUpdate is owned by the user
  if (
    broadcast.user.toString() !== req.body.user &&
    req.user.role !== "admin"
  ) {
    return next(
      new ErrorResponse(
        `User ${req.body.user} is not authorized to create LiveUpdate for this Broadcast`,
        404
      )
    );
  }
  const liveUpdate = await LiveUpdate.create(req.body);

  res.status(201).json({ success: true, data: liveUpdate });
});

// @desc    Update liveUpdate
// @route   PUT /api/v1/liveupdates/:id
// @access  Private
exports.updateLiveUpdate = asyncHandler(async (req, res, next) => {
  let liveUpdate = await LiveUpdate.findById(req.params.id);
  //Check if LiveUpdate exists
  if (!liveUpdate) {
    return next(
      new ErrorResponse(`LiveUpdate not found with id of ${req.params.id}`, 404)
    );
  }
  //Check if user owns LiveUpdate
  if (liveUpdate.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update this LiveUpdate`,
        404
      )
    );
  }

  liveUpdate = await LiveUpdate.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({ success: true, data: liveUpdate });
});

// @desc    Delete liveUpdate
// @route   DELETE /api/v1/liveUpdates/:id
// @access  Private
exports.deleteLiveUpdate = asyncHandler(async (req, res, next) => {
  let liveUpdate = await LiveUpdate.findById(req.params.id);
  if (!liveUpdate) {
    return next(
      new ErrorResponse(`LiveUpdate not found with id of ${req.params.id}`, 404)
    );
  }
  //Check if user owns LiveUpdate
  if (liveUpdate.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to delete this LiveUpdate`,
        404
      )
    );
  }
  liveUpdate = await LiveUpdate.findByIdAndDelete(req.params.id);
  res.status(200).json({ success: true, data: {} });
});
