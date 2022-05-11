import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
const Navigation = () => (
  <nav>
    <NavLink to="/" className={styles.link} activeClassName={styles.activeLink}>
      Home
    </NavLink>
    <NavLink
      to="/details"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Details
    </NavLink>
    <NavLink
      to="/movie"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Movie
    </NavLink>
    <NavLink
      to="/cast"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Cast
    </NavLink>
    <NavLink
      to="/reviews"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Reviews
    </NavLink>
  </nav>
);

export default Navigation;
