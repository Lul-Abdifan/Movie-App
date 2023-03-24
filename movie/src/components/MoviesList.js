import React from "react";

function MoviesList(props) {
  const Favorite = props.AddFavorite;
  return (
    <div className="grid grid-cols-4 gap-5 overlay-hidden">
      {props.movies.map((movie, index) => (
        <div
          key={index}
          class="relative transform hover:scale-105 transition duration-300 "
          
        >
          <img src={movie.Poster} alt="movie"/>
          <div className="overlay">
            <Favorite />
            {/* class="overlay flex flex-row items-center justify-center opacity-1  transition duration-500 ease-in absolute bottom-0 w-full" */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoviesList;
