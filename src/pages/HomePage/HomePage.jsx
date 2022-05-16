import PageHeading from 'components/PageHeading/PageHeading';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import s from './HomePage.module.css';
import * as getAxiosMovie from '../../servis-api/getAxiosMovie';
export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getAxiosMovie.axiosWeekMovies().then(res => setMovies(res.results));
  }, []);

  return (
    <>
      <PageHeading text="Trend movies on this week" />
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <img
                className={s.image}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path} `}
                alt={movie.title}
              />
              <NavLink to={`movies/${movie.id}`}>{movie.title}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
