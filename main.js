import express from "express";

const app = express();
const PORT = 6969;

app.get("/", (req, res) => {
  res.json({ msg: "hello new msg" });
});

app.listen(PORT, () => {
  console.log(`this port running at http://localhost:${PORT}`);
});
