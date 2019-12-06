const MOVIE_API_BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_API_KEY}`;

/**
 * Fetch movie's data from themoviedb api
 *
 * @param {number} page - Number of the page to query
 * @returns {object}
 */
async function getMovies(page) {
  const response = await fetch(`${MOVIE_API_BASE_URL}&page=${page}`);
  return response.json();
}

export default getMovies;
