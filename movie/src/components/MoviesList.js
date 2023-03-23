import React from "react";

function MoviesList(props) {
  return (
    <div className="grid grid-cols-4 gap-5">
      {props.movies.map((movie, index) => (
        <div key={index}>
          <img src={movie.Poster} alt="movie" />
        </div>
      ))}
    </div>
  );
}

export default MoviesList;
