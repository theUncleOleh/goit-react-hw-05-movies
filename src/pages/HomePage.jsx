import PageHeading from 'components/PageHeading/PageHeading';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as getAxiosMovie from '../servis-api/getAxiosMovie';
export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getAxiosMovie.axiosWeekMovies().then(res => setMovies(res.results));
  }, []);

  return (
    <>
      <PageHeading text="Trend movies on this week" />
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
    </>
  );
}
