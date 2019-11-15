import React, { useState, useEffect } from "react";

/**
 * Render a set of movie's information
 *
 * @returns {object}
 */
function MoviePage() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  /**
   * Check if the page scroll to the bottom to update the page state
   */
  function onScrollDepth() {
    const isBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    if (isBottom) {
      setPage(page + 1);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScrollDepth);

    return function() {
      window.removeEventListener("scroll", onScrollDepth);
    };
  });

  useEffect(() => {
    async function getMovies() {
      const respnse = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_API_KEY}&page=${page}`
      );
      const result = await respnse.json();
      setMovies(movies.concat(result.results));
    }

    getMovies();
  }, [page]);

  return (
    <div className="movie-container">
      {movies.map(movie => (
        <div key={`movie-${movie.id}`}>
          <div>{movie.title}</div>
          <div>{movie.overview}</div>
          <div>
            <img
              alt=""
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            />
          </div>
          <div>{movie.release_date}</div>
        </div>
      ))}
    </div>
  );
}

export default MoviePage;
