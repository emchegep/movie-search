import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({movies}) =>{
    if (movies.length === 0) {
        return (
            <div className="card-list">
                <div className="card">
                    <div className="card--content">
                        <h3 className="card--title">Movie not found. Try search using a different name</h3>
                    </div>

                </div>
            </div>
        )
    }
    return (
        <div className="card-list">
            {
                movies.filter(movie => movie.poster_path).map(movie => <MovieCard key={movie.id} movie={movie}/>)
            }
        </div>
    )
}

export default MoviesList
