import React from 'react';

export default function Show1Movie({movie, show}) {
    return (
        <div className='movie' onClick={() => show(movie.imdbID)}>
            <img src={movie.Poster} alt=''/>
            
            <h3>{movie.Title}</h3>
        </div>
    );
};
