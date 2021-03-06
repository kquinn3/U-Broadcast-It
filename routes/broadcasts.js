const express = require("express");
const {
  getBroadcasts,
  getBroadcast,
  createBroadcast,
  updateBroadcast,
  deleteBroadcast,
  getBroadcastsInRadius,
  getFavoriteBroadcasts,
  getBroadcastsInDefaultRadius
} = require("../controllers/broadcasts");

const Broadcast = require("../models/Broadcast");
const advancedResults = require("../middleware/advancedResults");

const router = express.Router();
const { protect, authorize } = require("../middleware/auth");

router.route("/radius/:zipcode/:radius").get(getBroadcastsInRadius);
router.route("/default/:zipcode/:radius").get(getBroadcastsInDefaultRadius);
//.get(advancedResults(Broadcast), getBroadcastsInRadius);

router
  .route("/")
  .get(advancedResults(Broadcast, "liveUpdates liveMessages"), getBroadcasts)
  .post(protect, authorize("broadcaster", "admin"), createBroadcast);
router.route("/fav").get(getFavoriteBroadcasts);
router
  .route("/:id")
  .get(getBroadcast)
  .put(protect, authorize("broadcaster", "admin"), updateBroadcast)
  .delete(protect, authorize("broadcaster", "admin"), deleteBroadcast);

module.exports = router;
