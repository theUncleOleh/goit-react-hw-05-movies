import axios from 'axios';

const AxiosMovies = () => {
  return axios
    .get(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=e63db2291c5b84e5166b5dd810de73f5'
    )
    .then(res => res.data)
    .catch(error => console.log(error));
};
export default AxiosMovies;
