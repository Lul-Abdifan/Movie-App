import React from "react";

function MoviesList(props) {
  const Favorite = props.AddFavorite;
  return (
    <div className="grid grid-cols-4 gap-5 ">
      {props.movies.map((movie, index) => (
        <div
          key={index}
          class="relative transform hover:scale-105 transition duration-300 overlay-shown"
        >
          <img src={movie.Poster} alt="movie" />
          <div className=" overlay" 
                 onClick={() => props.handleFavorite(movie)}>
            <Favorite />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoviesList;
