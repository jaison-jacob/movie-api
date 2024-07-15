import express from "express";
import MoviesRoutes from "./routes/movies.route.js";
import connectDb from "./lib/db.js";

const app = express();
const PORT = 6969;

app.get("/", (req, res) => {
  res.json({ msg: "hello new msg" });
});
connectDb();
app.use("/", MoviesRoutes);

app.listen(PORT, () => {
  console.log(`this port running at http://localhost:${PORT}`);
});
