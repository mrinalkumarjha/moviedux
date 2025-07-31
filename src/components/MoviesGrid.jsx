import React, {useState, useEffect} from "react";
import '../styles.css';
import MovieCard from './MovieCard';

export default function MoviesGrid() {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const [genre, setGenre] = useState("All");
    const [rating, setRating] = useState("All");

    useEffect(() => {
        fetch("movies.json")
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }

       const handleGenreChange = (event) => {
        setGenre(event.target.value);
    }

       const handleRatingChange = (event) => {
        setRating(event.target.value);
    }

    // Filter movies based on genre and rating
    const matchesGenre = (movie, genre) => {
        return genre === "All" || movie.genre.toLowerCase() === genre.toLowerCase();
    }

     const matchesSearchTerm = (movie, searchTerm) => {
       return movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    }

    const matchesRating = (movie, rating) => {
       switch (rating) {
            case "Good":
                return movie.rating >= 8;
            case "Ok":
                return movie.rating >= 5 && movie.rating < 8;
            case "Bad":
                return movie.rating < 5;
            default:
                return true; // If "All Ratings" is selected
        }
    }

    const filteredMovies = movies.filter(movie =>
        matchesGenre(movie, genre) && 
        matchesSearchTerm(movie, searchTerm) &&
        matchesRating(movie, rating)
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
                <div className="filter-bar">
                    <div className="filter-slot">
                        <label>Genre</label>
                        <select value={genre} 
                        onChange={handleGenreChange}
                        className="filter-dropdown">
                            <option value="All Genres">All</option>
                            <option value="Action">Action</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Drama">Drama</option>
                            <option value="Horror">Horror</option>
                        </select>
                    </div>
                    <div className="filter-slot">
                        <label>Rating</label>
                        <select value={rating} 
                          onChange={handleRatingChange}
                        className="filter-dropdown">
                            <option value="All Ratings">All</option>
                            <option value="Good">Good</option>
                            <option value="Ok">Ok</option>
                            <option value="Bad">Bad</option>
                        </select>
                    </div>
                </div>
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