import express from "express";
import {
  createMovies,
  deleteMovie,
  moviesList,
  updateMovies,
} from "../controllers/movies.controler.js";

const router = express.Router();

// CURD FUNCTIONALITY OF MOVIES
router.get("/movies", moviesList);

router.post("/movies", createMovies);

router.put("/movies/:id", updateMovies);

router.delete("/movies/:id", deleteMovie);

export default router;
