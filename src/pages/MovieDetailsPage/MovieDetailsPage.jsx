import { useState, useEffect } from 'react';
import { NavLink, useParams, Outlet } from 'react-router-dom';
import * as getAxiosMovie from '../../servis-api/getAxiosMovie';
import s from './MovieDetailsPage.module.css';
import Loader from 'components/Loader/Loader';

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  useEffect(() => {
    getAxiosMovie
      .axiosMovieById(movieId)
      .then(res => setMovieDetails(res))
      .catch(error => console.log(Error));
  }, [movieId]);

  return (
    <>
      {movieDetails ? (
        <>
          <h2>{movieDetails.title}</h2>
          <img
            className={s.image}
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path} `}
            alt={movieDetails.title}
          />
          <p>{movieDetails.tagline}</p>
        </>
      ) : (
        <Loader />
      )}
      <ul>
        <li>
          <NavLink to={'cast'}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={'reviews'}>Reviews</NavLink>
        </li>
      </ul>

      <hr />
      <Outlet />
    </>
  );
}
