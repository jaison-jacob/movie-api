import express from "express";
import MoviesRoutes from "./routes/movies.route.js";

const app = express();
const PORT = 6969;

app.get("/", (req, res) => {
  res.json({ msg: "hello new msg" });
});

app.use("/", MoviesRoutes);

app.listen(PORT, () => {
  console.log(`this port running at http://localhost:${PORT}`);
});
