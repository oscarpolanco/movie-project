import React from "react";
import { IMG_PLACEHOLDER, MOVIE_IMG_BASE_SOURCE } from "./constant";
import {
  movieCard,
  movieImageContainer,
  movieInfo,
  movieInfoTitle,
  movieInfoOverview
} from "./style";

/**
 * Render the data of a movie
 *
 * @param {array} movie - Data from a movie
 * @returns {object}
 */
function MovieItem({ release_date = '', poster_path =' ', title= '', overview= ''  }) {
  const moviePath = poster_path;
  const imgSCR = moviePath
    ? `${MOVIE_IMG_BASE_SOURCE}${moviePath}`
    : IMG_PLACEHOLDER;

  return (
    <div css={movieCard}>
      <div css={movieImageContainer}>
        <img alt="" src={imgSCR} />
      </div>
      <div css={movieInfo}>
        <div css={movieInfoTitle}>
          <h3>{title}</h3>
          <span>{release_date}</span>
        </div>
        <p css={movieInfoOverview}>{overview}</p>
      </div>
    </div>
  );
}

export default MovieItem;
