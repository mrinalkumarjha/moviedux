import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
import Watchlist from './components/Watchlist';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {useState, useEffect} from "react";



function App() {
    const [movies, setMovies] = useState([]);
    const[watchlist, setWatchlist] = useState([]);

    useEffect(() => {
    fetch("movies.json")
        .then(response => response.json())
        .then(data => setMovies(data))
        .catch(error => console.error('Error fetching movies:', error));
    }, []);

    const toggleWatchlist = (movieId) => {
        setWatchlist(prevWatchlist => {
            if (prevWatchlist.includes(movieId)) {
                return prevWatchlist.filter(id => id !== movieId); // removing it
            } else {
                return [...prevWatchlist, movieId];
            }
        });
    }

  return (
    <div className="App">
      <div className="container">
        <Header ></Header>
        <Router>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/watchlist" className="nav-link">Watchlist</Link>
              </li>
            </ul>
          </nav>
            
            <Routes>
              <Route path="/" 
              element={<MoviesGrid movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />}></Route>
              <Route path="/watchlist" element={<Watchlist watchlist={watchlist} movies={movies} toggleWatchlist={toggleWatchlist} />}></Route>
            </Routes>
        </Router>

      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
