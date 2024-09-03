const API_KEY = import.meta.env.VITE_API_KEY;
const request = {
  fetchTrending: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchNetflixPopular: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchactionmovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedymovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTopratedmovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
};
export default request;
