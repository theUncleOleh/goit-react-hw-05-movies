import s from './CardOfOneMovie.module.css';
import { NavLink, useLocation } from 'react-router-dom';
export default function CardOfOneMovie({ movieDetails }) {
  const location = useLocation();
  return (
    movieDetails && (
      <div className={s.container}>
        <h2 className={s.title}>{movieDetails.title}</h2>
        <div className={s.movie}>
          <img
            className={s.image}
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path} `}
            alt={movieDetails.title}
          />
          <div className={s.movietext}>
            <p className={s.tagline}>{movieDetails.tagline}</p>
            <span className={s.overview}>{movieDetails.overview}</span>
            <ul className={s.genreslist}>
              {movieDetails.genres.map(genre => (
                <li key={genre.id} className={s.genre}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul>
          <li>
            <NavLink
              to={'cast'}
              state={{
                from: {
                  location,
                },
              }}
              className={({ isActive }) => (!isActive ? s.link : s.active)}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'reviews'}
              state={{
                from: {
                  location,
                },
              }}
              className={({ isActive }) => (!isActive ? s.link : s.active)}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    )
  );
}
