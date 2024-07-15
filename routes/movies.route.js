import express from "express";
import {
  createMovies,
  deleteMovie,
  getMovieDetails,
  getmoviesList,
  updateMovies,
} from "../controllers/movies.controler.js";

const router = express.Router();

// CURD FUNCTIONALITY OF MOVIES
router.get("/movies", getmoviesList);

router.get("/movies/:id", getMovieDetails);

router.post("/movies", createMovies);

router.put("/movies/:id", updateMovies);

router.delete("/movies/:id", deleteMovie);

export default router;
