// eslint-disable-next-line no-undef
const API_KEY = process.env.REACT_APP_API_KEY;
const request = {
fetchTrending: `/trending/movie/day?api_key=${API_KEY}&language=en-US`,
fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchHistoryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
fetchComedyMovies: `/descover/movie?api_key=${API_KEY}&with_genres=35`,
fetchTvShow: `/tv/popuar?api_key=${API_KEY}&language=en-US&page=1`,

};

export default request;

