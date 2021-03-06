import { NavLink, useLocation } from 'react-router-dom';
import slugify from 'slugify';
import s from './CardList.module.css';

const makeSlug = string =>
  slugify(string, {
    lower: true,
  });

export default function CardInCardList({ movies }) {
  const location = useLocation();
  return (
    movies && (
      <ul className={s.list}>
        {movies.map(movie => (
          <li key={movie.id} className={s.item}>
            <img
              className={s.image}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path} `}
              alt={movie.title}
            />
            <NavLink
              to={`movies/${makeSlug(`${movie.title} ${movie.id}`)}`}
              state={{ from: location }}
              className={({ isActive }) => (!isActive ? s.link : s.active)}
            >
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    )
  );
}
