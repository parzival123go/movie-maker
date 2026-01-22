
const mongoModel = require('../model/model');

const resolvers = {
  listMovies: () => {
    return mongoModel.find({});
  },
  addMovie: (args) => {
    let newMovie = new mongoModel({
        name: args.name,
        year: args.year,
        genre: args.genre
    });
    newMovie.save();
    
    return newMovie;
  }
};

module.exports = resolvers;
