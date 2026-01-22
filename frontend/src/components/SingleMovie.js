import React from 'react';


const SingleMovie = (props) => {
    return ( 
        <div className="card">
            <div className="container">
                <h2>{props.movieName}</h2>
                <p>Year: {props.movieYear}</p>
                <p>Genre: {props.movieGenre}</p>
            </div>
        </div>
     );
}
 
export default SingleMovie;