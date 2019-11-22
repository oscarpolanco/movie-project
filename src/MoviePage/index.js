import React, { useState, useEffect } from "react";
import MovieItem from "./MovieItem/";
import { movieContainer, resultContainer } from "./style";
import getMovies from "../api/theMovieDB";

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
      setPage(page => page + 1);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScrollDepth);

    return () => {
      window.removeEventListener("scroll", onScrollDepth);
    };
  }, []);

  useEffect(() => {
    async function setMoviesData() {
      const result = await getMovies(page);
      setMovies(movies => movies.concat(result.results));
    }

    setMoviesData();
  }, [page]);

  return (
    <div css={movieContainer}>
      <h1>Movie List</h1>
      <div css={resultContainer}>
        {movies.map(movie => (
          <MovieItem key={`movie-${movie.id}`} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MoviePage;
