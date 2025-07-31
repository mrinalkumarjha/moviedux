import React, {useState, useEffect} from "react";
import '../styles.css';
import MovieCard from './MovieCard';

export default function MoviesGrid() {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("movies.json")
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <div>
            <div className="search-bar">
                <input 
                    type="text" className="search-input"
                    placeholder="Search for a movie..." 
                    value={searchTerm} 
                    onChange={handleSearchChange} 
                />
            </div>

            <div className="movies-grid">
                {filteredMovies.map(movie => (
                <MovieCard movie={movie} key={movie.id} ></MovieCard>
                ))}
            </div>

            <h1>Movies</h1>
            <p>Found {movies.length} movies</p>
        </div>
     
    );
}