import { useEffect, useState } from "react";
import AddFavorite from "./components/AddFavorite";
import MoviesList from "./components/MoviesList";
import Search from "./components/Search";
import "./App.css"
// const axios = require("axios");

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const axios = require("axios");

  // axios.get('http://www.omdbapi.com/?s=Friends&apikey=c020e08e')
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  const getMovieRequest = async (search) => {
    const url = `http://www.omdbapi.com/?s=${search}&apikey=c020e08e`;
    const response = await fetch(url);
    const respJson = await response.json();
    if (respJson.Search) {
      setMovies(respJson.Search);
    } else {
      setSearch("Friends");
    }
  };

  useEffect(() => {
    getMovieRequest(search);
  }, [search]);

  return (
    <div
      className="container-fluid movie-app"
      class="bg-black p-3 flex flex-col"
    >
      <div class="p-8">
        <Search search={search} setSearch={setSearch} />
      </div>

      <div className="flex flex-raw">
        <MoviesList movies={movies} AddFavorite={AddFavorite} />
      </div>
    </div>
  );
}

export default App;
