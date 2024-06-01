import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import GenreRow from './GenreRow';
import MovieList from './MovieList';

function MoviePage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);
  
    // Fetch genres on component mount
    useEffect(() => {
        fetchGenres();
        fetchMovies(); // Fetch initial set of movies
    }, []);
  
    const fetchGenres = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=1e285e57109ee5b8ca91986f77de13a0');
            const data = await response.json();
            setGenres(data.genres);
        } catch (error) {
            console.error('Error fetching genres:', error);
        }
    };
  
    const fetchMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=1e285e57109ee5b8ca91986f77de13a0');
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };
  
    // Fetch movies based on selected genre and search term
    useEffect(() => {
        fetchMovies();
    }, [selectedGenre, searchTerm]);
  
    return (
        <div>
            <h1>Movixer</h1>
            <GenreRow genres={genres} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
            <MovieList movies={movies} />
        </div>
    );
  }
  
  export default MoviePage;