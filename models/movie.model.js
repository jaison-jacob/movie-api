import { Schema, model } from "mongoose";

const schema = Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const Movie = model("movie", schema);

export default Movie;
