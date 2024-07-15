export const getmoviesList = (req, res) => {
  res.send("hello get output");
};

export const createMovies = (req, res) => {
  //   res.send("hello get output");

  console.log(req.body);

  return res.json(req.body);
};

export const updateMovies = (req, res) => {
  res.send("hello get output");
};
export const deleteMovie = (req, res) => {
  res.send("hello get output");
};
