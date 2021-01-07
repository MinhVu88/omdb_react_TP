import React from 'react';

export default function Select({selectedMovie, closeSelectedFilm}) {
    return (
        <section className='selected'>
            <div className='content'>
                <h2>{selectedMovie.Title} <span>({selectedMovie.Year})</span></h2>

                <p className='rating'>Rating: {selectedMovie.Ratings[0].Value}</p>
                
                <div className='plot'>
                    <img src={selectedMovie.Poster} alt=''/>

                    <p>{selectedMovie.Plot}</p>
                    
                    <button className='close' onClick={closeSelectedFilm}>Close</button>
                </div>
            </div>
        </section>
    );
};
