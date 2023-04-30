import React, { useState } from "react";
import Pop from "./PopUp";

function MoviesList(props) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  function handleShowPopup(movie) {
    setSelectedMovie(movie);
  }

  function handleClosePopup() {
    const modal = document.getElementsByClassName('modal')[0];
    modal.style.display = 'none';
  }

  return (
    <div className="grid grid-cols-4 gap-5">
      {props.movies.map((movie, index) => (
        <div
          key={index}
          className="relative transform hover:scale-105 transition duration-300 overlay-shown"
        >
          <img
            src={movie.Poster}
            alt="movie"
            className="
            pop-background"
          />
          <div className="overlay" onClick={() => handleShowPopup(movie)}>
            <div className="flex text-xl text-Dark gap-2">
              <h1 className="pb-1 font-bolder text-pink-900 text-xl">
                Show More About Movie
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
          </div>
          {selectedMovie === movie && (
            <Pop movie={movie} onClose={handleClosePopup} />
          )}
        </div>
      ))}
    </div>
  );
}

export default MoviesList;
