import React from 'react';

function Favorites({ favorites }) {
    return (
        <div className="favorites-container">
            <h2>Favorites</h2>
            <ul>
                {favorites.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Favorites;