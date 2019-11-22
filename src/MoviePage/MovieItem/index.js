import React from "react";
import { IMG_PLACEHOLDER, MOVIE_IMG_BASE_SOURCE } from "./constant";
import { itemCard, movieImage, movieInfo, movieOverview, movieTitle } from "./style";

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
    <div css={itemCard}>
      <div css={movieImage}>
        <img alt="" src={imgSCR} />
      </div>
      <div css={movieInfo}>
        <div css={movieTitle}>
          <h3>{title}</h3>
          <span>{release_date}</span>
        </div>
        <p css={movieOverview}>{overview}</p>
      </div>
    </div>
  );
}

export default MovieItem;
