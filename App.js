import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MovieNavbar from './components/Navbar';
import MoviePage from './components/moviePage';
import MovieList from './components/MovieList';
import Movixer from './movixer';

function App() {
  return (
    <Router>
      <MovieNavbar />
      
      <Routes>
        <Route path="/" exact component={MoviePage} />
        <Route path="/movies" component={MovieList} />
      </Routes>
      <Movixer />
    </Router>
  );
}

export default App;
