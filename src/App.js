import React from 'react';
import logo from './logo.svg';
import SearchMovies from "./components/SearchMovies";

function App() {
  return (
    <div className="container">
      <h1 className="title ">Movie Search</h1>
        <SearchMovies/>
    </div>
  );
}

export default App;
