const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        listMovies: [Movie]
    }

    type Movie {
        name: String
        year: String
        genre: String
    }

    type Mutation {
        addMovie(name: String!, year: String!, genre: String!): Movie
    }
`);

module.exports = schema;