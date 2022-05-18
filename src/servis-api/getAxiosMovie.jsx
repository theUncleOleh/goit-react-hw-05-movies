import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'api_key=e63db2291c5b84e5166b5dd810de73f5';

export async function axiosWeekMovies() {
  const response = await axios.get(`/trending/movie/week?${API_KEY}`);
  return response.data;
}

export async function axiosMovieById(movieId) {
  const response = await axios.get(`/movie/${movieId}?${API_KEY}`);
  return response.data;
}

export async function axiosMovieCast(movieId) {
  const response = await axios.get(`/movie/${movieId}/credits?${API_KEY}`);
  return response.data;
}

export async function axiosMovieReviews(movieId) {
  const response = await axios.get(`/movie/${movieId}/reviews?${API_KEY}`);
  return response.data;
}
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
export async function axiosSearchMovies(searchQuery) {
  const response = await axios.get(
    `/search/movie?${API_KEY}&query=${searchQuery}`
  );
  return response.data;
}

