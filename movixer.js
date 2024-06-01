import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Favorites from './components/Favorites'; // Import the Favorites component if it's not already imported
import './movixer.css';

function Movixer() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                let url = `https://api.themoviedb.org/3/discover/movie?api_key=1e285e57109ee5b8ca91986f77de13a0`;
                if (searchTerm.trim() !== '') {
                    url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=1e285e57109ee5b8ca91986f77de13a0&query=${searchTerm}`;
                }
                
                const response = await fetch(url);
                
                const data = await response.json();
                
                setMovies(data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, [searchTerm]);

    return (
        <div>
            <SearchBar setSearchTerm={setSearchTerm} />
            <MovieList movies={movies} setFavorites={setFavorites} />
            <Favorites favorites={favorites} />
        </div>
    );
}

export default Movixer;