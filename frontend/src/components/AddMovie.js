import React, {useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { gql } from '@apollo/client';
import { useQuery, useMutation } from '@apollo/client/react';

const addNewMovie = gql`
  mutation AddNewMovie($name: String!, $year: String!, $genre: String!) {
    addMovie(name: $name, year: $year, genre: $genre) {
      name
      year
      genre
    }
  }
`;

const listAllMovies = gql`
    query {
        listMovies {
            name
            year
            genre
        }
    }
`;

const AddMovie = () => {

    const submitMovie = (e) => {
        e.preventDefault();
        addMovie({
            variables: {
                name: movieName,
                year: movieYear,
                genre: movieGenre
            },
            refetchQueries: [{ query: listAllMovies }]
        });
    }

    const [movieName, setMovieName] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [movieGenre, setMovieGenre] = useState('');

    const [addMovie, { data, loading, error }] = useMutation(addNewMovie);

    if (loading) return <p className='loading'>Submitting movie...</p>;
    if (error) return <p className='error'>Error submitting movie: {error.message}</p>;

    return ( 
    <div className="addMovie" id="addNewMovie">
        <h2>Add a New Movie</h2>
        <form onSubmit={submitMovie}>
            <input type="text" placeholder="Movie Name" onChange={(e) => setMovieName(e.target.value)} />
            <input type="number" placeholder="Movie Year" onChange={(e) => setMovieYear(e.target.value)} />
            <input type="text" placeholder="Movie Genre" onChange={(e) => setMovieGenre(e.target.value)} />
            <button >Add Movie</button>
        </form>
        <div className="top">
            <Link smooth to="#header" className='top-button'>Back to Top</Link>
        </div>
    </div> );
}
 
export default AddMovie;