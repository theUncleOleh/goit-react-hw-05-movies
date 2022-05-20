import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
const Navigation = () => (
  <nav className={s.header}>
    <NavLink
      to="/"
      className={({ isActive }) => (!isActive ? s.link : s.active)}
    >
      Home
    </NavLink>
    <NavLink
      to="/movies"
      className={({ isActive }) => (!isActive ? s.link : s.active)}
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
