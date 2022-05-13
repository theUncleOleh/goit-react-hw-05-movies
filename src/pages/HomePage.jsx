import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AxiosMovies from 'servis-api/AxiosMovie';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    AxiosMovies().then(data => {
      setMovies(data.results);
      // setMovieId(data.resalts.id);

      // console.log(data.results.title);
    });
  }, []);

  return (
    <>
      <h2>Trending movies on this week</h2>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
    </>
  );
}
