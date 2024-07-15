import Movie from "../models/movie.model.js";

export const getmoviesList = async (req, res) => {
  try {
    const moviesList = await Movie.find();
    res.json(moviesList);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getMovieDetails = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (movie == null) {
      res.json("cannot find movie");
    } else {
      res.json(movie);
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createMovies = async (req, res) => {
  const newMovie = new Movie({ title: req.body.title, desc: req.body.desc });

  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateMovies = async (req, res) => {
  try {
    const updatedMovie = await Movie.findOneAndUpdate(
      {
        _id: req.params.id,
      },

      {
        title: req.body.title,
        desc: req.body.desc,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const deleteMovie = async (req, res) => {
  try {
    await Movie.deleteOne({ _id: req.params.id });
    res.json({ message: "Movie deleted" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
