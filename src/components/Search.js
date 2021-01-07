import React from 'react';

export default function Search({handleInput, look4Movies}) {
    return (
        <section className='seach-container'>
            <input type='text' 
                   placeholder='Search for movies....' 
                   className='search-form' 
                   onChange={handleInput}
                   onKeyPress={look4Movies}
            />
        </section>
    );
};
