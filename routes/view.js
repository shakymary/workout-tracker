const router = require("express").Router();

// TODO: add a route "/exercise" to link to exercise.html
router.get("/exercise", function (req, res) {
  res.sendFile("exercise.html");
});

// TODO: add a route "/stats" to link to stats.html
router.get("/stats", function (req, res) {
  res.sendFile("stats.html");
});

module.exports = router;
