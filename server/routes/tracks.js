const express = require("express");

const TracksController = require("../controllers/tracks");

const router = express.Router();

router.get("/search", TracksController.search);
router.get("/:id", TracksController.getTrack);
router.put("/", TracksController.addTrackToFavs);
router.delete("/", TracksController.removeTrackFromFavs);

module.exports = router;
