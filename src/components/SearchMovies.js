import React, {useState} from "react";
import MovieCard from "./MovieCard";
import MoviesList from "./MoviesList";

const SearchMovies = ()=>{
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    const [isLoading, setIsloading] = useState(true)
    const [error, setError] = useState(null)

    const searchMovie = async (e)=>{
        e.preventDefault()

        const url =`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

        try{
            setIsloading(true)
            const res = await fetch(url)
            const data = await res.json()
            setIsloading(false)
            setMovies(data.results)
        } catch (err) {
            setIsloading(false)
            setError(err)
            console.log(err)
        }

    }
    const handleQuery = (e)=>{
        setQuery(e.target.value)
    }
    return (<>
                <form className="form" onSubmit={searchMovie}>
                    <label htmlFor="query" className="label">Movie Name</label>
                    <input
                        type="text"
                        name="query"
                        placeholder="Enter movie name"
                        className="input"
                        value={query}
                        onChange={handleQuery}
                    />
                    <button className="button" type="submit">Search</button>
                </form>
                {!isLoading && movies && <MoviesList movies={movies}/> }
            </>
    )
}
export default SearchMovies
