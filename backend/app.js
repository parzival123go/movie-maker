const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { createHandler } = require('graphql-http/lib/use/express');
var { buildSchema } = require('graphql');
const movieSchema = require('./schema/schema');
const movieResolvers = require('./resolvers/resolvers');
const cors = require('cors');

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

app.use(cors());

app.all('/graphql', createHandler({
  schema: movieSchema,
  rootValue: movieResolvers
}));


app.get('/hi', (req, res) => {
  res.send('Hello from express server!');
});

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});