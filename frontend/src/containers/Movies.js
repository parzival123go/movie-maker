import React from 'react';
import SingleMovie from '../components/SingleMovie';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

const listAllMovies = gql`
    query {
        listMovies {
            name
            year
            genre
        }
    }
`;

const Movies = () => {

    const { loading, error, data } = useQuery(listAllMovies);
    console.log(data);

    if (loading) return <p className='loading'>We are loading your movies...</p>;
    if (error) return <p className='error'>Cannot fetch your movies : {error.message}</p>;
    if (data.listMovies.length === 0) return <p className='no-movies'>Please add some movies.</p>;

    return ( 
        <div className="movies">
            {data && data.listMovies.map((movie, index) => (
                <SingleMovie 
                key = {index}
                movieName = {movie.name}
                movieYear = {movie.year}
                movieGenre = {movie.genre}
                />
            ))}
        </div>
     );
}
 
export default Movies;