import React, {useState, useEffect} from "react";
import '../styles.css';
import MovieCard from './MovieCard';

export default function MoviesGrid() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("movies.json")
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    return(
        <div className="movies-grid">
            {movies.map(movie => (
                <MovieCard movie={movie} key={movie.id} ></MovieCard>
            ))}
            
        </div>
    );
}