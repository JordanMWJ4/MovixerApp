import React, { useState } from 'react';

function MovieList({ movies }) {
    const [favorites, setFavorites] = useState([]);

    // Function to add a movie to favorites
    const FavoriteMovie = (movie) => {
        // Check if the movie is not already in favorites
        if (!favorites.some((favMovie) => favMovie.id === movie.id)) {
            // Add the movie to favorites
            setFavorites([...favorites, movie]);
        }
    };

    // Function to toggle overview for a movie
    const toggleOverview = (index) => {
        // Implement the logic to toggle overview
    };

    return (
        <div className="movies-container">
            {/* Map over the movies array */}
            {movies && movies.map((movie, index) => (
                <div key={index} className="movie-card">
                    {movie.poster_path && (
                        <div className="card">
                            {/* Render movie poster */}
                            <img className="card-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Poster for ${movie.title}`} />
                            <div className="card-body">
                                <p className="card-title">{movie.title}</p>
                                <button onClick={() => FavoriteMovie(movie)}>Favorite</button>
                                {/* Button to toggle overview */}
                                <button onClick={() => toggleOverview(index)}>
                                    {/* Toggle button text based on whether the movie is in favorites */}
                                    {favorites.some(favMovie => favMovie.id === movie.id) ? "Hide Overview" : "Show Overview"}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default MovieList;