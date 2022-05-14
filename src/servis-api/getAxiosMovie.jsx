import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=e63db2291c5b84e5166b5dd810de73f5';

async function AxiosMovies(url = '', config = {}) {
  return await axios
    .get(url, config)
    .then(res => res.data)
    .catch(error => console.log(error));
}

export function axiosWeekMovies() {
  return AxiosMovies(`${BASE_URL}/trending/movie/week?${API_KEY}`);
}

export function axiosMovieById(movieId) {
  return AxiosMovies(`${BASE_URL}/movie/${movieId}?${API_KEY}`);
}
// export default async function axiosMovieId(movieId) {
//   return await axios
//     .get(`${BASE_URL}/movie/${movieId}?${API_KEY}`)
//     .then(res => console.log(res.data))
//     .catch(error => console.log(error));
// }
