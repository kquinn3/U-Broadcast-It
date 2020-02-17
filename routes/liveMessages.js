const express = require("express");
const {
  getLiveMessagesByBroadcastId,
  // getLiveMessage,
  createLiveMessage,
  updateLiveMessage,
  deleteLiveMessage
} = require("../controllers/liveMessages");

const router = express.Router();
const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
  .post(protect, authorize("broadcaster", "user", "admin"), createLiveMessage);
router
  .route("/:id")
  .get(getLiveMessagesByBroadcastId)
  .put(protect, authorize("broadcaster", "user", "admin"), updateLiveMessage)
  .delete(
    protect,
    authorize("broadcaster", "user", "admin"),
    deleteLiveMessage
  );

module.exports = router;
