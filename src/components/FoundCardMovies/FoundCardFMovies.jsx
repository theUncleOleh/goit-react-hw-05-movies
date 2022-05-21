import { NavLink } from 'react-router-dom';
import s from './FoundCardMovies.module.css';
import slugify from 'slugify';
const makeSlug = string =>
  slugify(string, {
    lower: true,
  });
export default function CardFindMovies({ movies }) {
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
              to={`${makeSlug(`${movie.title} ${movie.id}`)}`}
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
