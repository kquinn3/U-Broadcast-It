const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const LiveMessage = require("../models/LiveMessage");
const Broadcast = require("../models/Broadcast");

// @desc    Get all liveMessages for a broadcast
// @route   GET /api/v1/livemessages/:broadcastID
// @access  Public
exports.getLiveMessagesByBroadcastId = asyncHandler(async (req, res, next) => {
  const broadcast = await Broadcast.findById(req.params.id);
  if (!broadcast) {
    return next(
      new ErrorResponse(`Broadcast not found with id of ${req.params.id}`, 404)
    );
  }
  const liveMessages = await LiveMessage.find({
    broadcast: req.params.id
  })
    .sort({ createdAt: -1 })
    .populate({ path: "user", select: "name" });

  res
    .status(200)
    .json({ success: true, count: liveMessages.length, data: liveMessages });
});

// @desc    Create new liveMessage
// @route   POST /api/v1/liveUpdates
// @access  Private
exports.createLiveMessage = asyncHandler(async (req, res, next) => {
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
  //Check that the broadcast of the liveMessage is owned by the user
  if (
    broadcast.user.toString() !== req.body.user &&
    req.user.role !== "admin"
  ) {
    return next(
      new ErrorResponse(
        `User ${req.body.user} is not authorized to create LiveMessage for this Broadcast`,
        404
      )
    );
  }

  const liveMessage = await LiveMessage.create(req.body);
  res.status(201).json({ success: true, data: liveMessage });
});

// @desc    Update liveMessage
// @route   PUT /api/v1/livemessage/:id
// @access  Private
exports.updateLiveMessage = asyncHandler(async (req, res, next) => {
  let liveMessage = await LiveMessage.findById(req.params.id);
  if (!liveMessage) {
    return next(
      new ErrorResponse(
        `LiveMessage not found with id of ${req.params.id}`,
        404
      )
    );
  }
  //Check if user owns LiveMessage
  if (
    liveMessage.user.toString() !== req.user.id &&
    req.user.role !== "admin"
  ) {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update this LiveMessage`,
        404
      )
    );
  }

  liveMessage = await LiveMessage.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({ success: true, data: liveMessage });
});

// @desc    Delete liveMessage
// @route   DELETE /api/v1/livemessage/:id
// @access  Private
exports.deleteLiveMessage = asyncHandler(async (req, res, next) => {
  let liveMessage = await LiveMessage.findById(req.params.id);
  //Check if LiveMessage exists
  if (!liveMessage) {
    return next(
      new ErrorResponse(
        `LiveMessage not found with id of ${req.params.id}`,
        404
      )
    );
  }
  //Check if user owns LiveMessage
  if (
    liveMessage.user.toString() !== req.user.id &&
    req.user.role !== "admin"
  ) {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update this LiveMessage`,
        404
      )
    );
  }

  liveMessage = await LiveMessage.findByIdAndDelete(req.params.id);
  if (!liveMessage) {
    return next(
      new ErrorResponse(
        `LiveMessage not found with id of ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({ success: true, data: {} });
});
