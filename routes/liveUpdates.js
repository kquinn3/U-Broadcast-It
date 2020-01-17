const express = require("express");
const {
  getLiveUpdatesByBroadcastId,
  // getLiveUpdate,
  createLiveUpdate,
  updateLiveUpdate,
  deleteLiveUpdate
} = require("../controllers/liveUpdates");

const router = express.Router();
const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
  .post(protect, authorize("broadcaster", "admin"), createLiveUpdate);
router
  .route("/:id")
  .get(getLiveUpdatesByBroadcastId)
  .put(protect, authorize("broadcaster", "admin"), updateLiveUpdate)
  .delete(protect, authorize("broadcaster", "admin"), deleteLiveUpdate);

module.exports = router;
