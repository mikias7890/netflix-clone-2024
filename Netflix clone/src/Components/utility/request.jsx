const API_KEY = process.env.REACT_APP_API_KEY;
const request = {
  fetchTrending: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchNetflixPopular: `/tv/popular?=${API_KEY}&language=en-US&page=1`,
  fetchactionmovies: `/discover/movie?api_key=${API_KEY}&with_genre=28`,
  fetchComedymovies: `/discover/movie?api_key=${API_KEY}&with_genre=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genre=2`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genre=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genre=99`,
  fetchTopratedmovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
};
export { request };
