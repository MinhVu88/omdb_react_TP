import React from 'react';
import Show1Movie from './Movie';

export default function ShowMovies({movies, openSelectedFilm}) {
    return (
        <section className='movies'>
            {movies.map(film => (<Show1Movie movie={film} key={film.imdbID} show={openSelectedFilm}/>))}
        </section>
    );
};
