import React from 'react';

function GenreRow({ genres = [], selectedGenre, setSelectedGenre }) {
    const handleClick = (genre) => {
        setSelectedGenre(genre);
    };

    return (
        <div>
            {genres.map(genre => (
                <button key={genre.id} onClick={() => handleClick(genre)} className={selectedGenre === genre ? 'active' : ''}>
                    {genre.name}
                </button>
            ))}
        </div>
    );
}

export default GenreRow;