// import { Link } from '../Navigation/Navigation.styled';
// const Navigation = () => (
//   <nav>
//     <Link to="/">Home</Link>
//     <Link to="/details">Details</Link>
//     <Link to="/movie">Movie</Link>
//     <Link to="/cast">Cast</Link>
//     <Link to="/reviews">Reviews</Link>
//   </nav>
// );

// export default Navigation;
import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
const Navigation = () => (
  <nav>
    <NavLink
      exact="true"
      to="/"
      className={({ isActive }) => (isActive ? s.link : s.active)}
    >
      Home
    </NavLink>
    <NavLink
      to="/movie"
      className={({ isActive }) => (!isActive ? s.link : s.active)}
    >
      Movie
    </NavLink>
    <NavLink
      to="/details"
      className={({ isActive }) => (!isActive ? s.link : s.active)}
    >
      MovieDetailsPage
    </NavLink>

    <NavLink
      to="/cast"
      className={({ isActive }) => (!isActive ? s.link : s.active)}
    >
      Cast
    </NavLink>
    <NavLink
      to="/reviews"
      className={({ isActive }) => (!isActive ? s.link : s.active)}
    >
      Reviews
    </NavLink>
  </nav>
);

export default Navigation;
