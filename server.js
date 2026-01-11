const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

const DATA_PATH = path.join(__dirname, "data.json");

app.use(express.json());

// helper
function loadData() {
  if (!fs.existsSync(DATA_PATH)) return null;
  return JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
}

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// =======================
// ✅ GET VIDEO BY TRIGGER
// =======================
app.get("/video", (req, res) => {
  const q = (req.query.q || "").toLowerCase();
  const data = loadData();

  if (!data || !data.videos) {
    return res.status(500).json({ error: "Invalid data.json" });
  }

  if (!data.status) {
    return res.status(403).json({ error: "Video system OFF" });
  }

  const videos = data.videos[q];

  if (!videos || videos.length === 0) {
    return res.status(404).json({ error: "No video for trigger" });
  }

  res.json({
    status: true,
    body: data.body || "",
    trigger: q,
    video: random(videos)
  });
});

// =======================
// 🔥 ADD VIDEO
// =======================
app.post("/add", (req, res) => {
  const { trigger, video } = req.body;
  if (!trigger || !video) {
    return res.status(400).json({ error: "trigger & video required" });
  }

  const data = loadData() || {
    status: true,
    body: "",
    videos: {}
  };

  const key = trigger.toLowerCase();
  if (!data.videos[key]) data.videos[key] = [];

  data.videos[key].push(video);

  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));

  res.json({
    success: true,
    trigger: key,
    video
  });
});

// =======================
// ON / OFF
// =======================
app.post("/status", (req, res) => {
  const { status } = req.body;
  const data = loadData();

  data.status = !!status;
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));

  res.json({ success: true, status: data.status });
});

app.listen(PORT, () => {
  console.log("✅ Video API running on port", PORT);
});
