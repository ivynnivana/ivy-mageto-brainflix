const express = require("express");
const router = express.Router();
const fileName = __dirname + "/../../model/videos.json";
const mainFile = __dirname + "/../../model/mainVideos.json";
let videos = require(fileName);
let mainVideos = require(mainFile);
// const helper = require("../../helper/helper");

//  Get all videos
router.get("/", (req, res) => {
  res.json(videos);
});

//  Get video with :id
router.get("/:id", (req, res) => {
  // res.send(req.params.id);
  const found = mainVideos.some(video => video.id === req.params.id);
  if (found) {
    res.json(mainVideos.filter(video => video.id === req.params.id));
  } else {
    res
      .status(400)
      .json({ errorMessage: `Video with ID:${req.params.id} not found` });
  }
});

//  Create new video
router.post("/", (req, res) => {
  const newVideo = {
    id: helper.getNewId(videos),
    title: req.body.title,
    channel: req.body.channel,
    image: req.body.image
  };
  if (!newVideo.title || !newVideo.channel || !newVideo.image) {
    return res.status(400).json({
      errorMessage: "Please provide title, channel and image for new video"
    });
  }
  videos.push(newVideo);
  // console.log(JSON.stringify(videos));
  helper.writeJSONFile(fileName, videos);
  res.json(videos);
});

//  Update video with :id
router.put("/:id", (req, res) => {
  //   res.send(req.params.id);
  const found = videos.some(video => video.id === req.params.id);
  if (found) {
    videos.forEach(video => {
      if (video.id === req.params.id) {
        video.title = req.body.title ? req.body.title : video.title;
        video.channel = req.body.channel ? req.body.channel : video.channel;
        video.image = req.body.image ? req.body.image : video.image;
      }
    });
    helper.writeJSONFile(fileName, videos);
    res.json({ msg: "Video updated", videos: videos });
  } else {
    res
      .status(400)
      .json({ errorMessage: `Video with ID: ${req.params.id} not found` });
  }
});

//  Delete video with :id
router.delete("/:id", (req, res) => {
  //   res.send(req.params.id);
  const found = videos.some(video => video.id === req.params.id);
  if (found) {
    const videosAfterDeletion = videos.filter(
      video => video.id !== req.params.id
    );
    helper.writeJSONFile(fileName, videosAfterDeletion);
    res.json({
      msg: `Video with ID: ${req.params.id} Deleted`,
      videos: videosAfterDeletion
    });
  } else {
    res
      .status(400)
      .json({ errorMessage: `Video with ID: ${req.params.id} not found` });
  }
});

module.exports = router;
