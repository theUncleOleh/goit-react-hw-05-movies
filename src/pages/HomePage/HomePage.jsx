import PageHeading from 'components/PageHeading/PageHeading';
import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import s from './HomePage.module.css';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import * as getAxiosMovie from '../../servis-api/getAxiosMovie';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};
export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(navigate);
  console.log(location);
  useEffect(() => {
    setStatus(Status.PENDING);
    getAxiosMovie
      .axiosWeekMovies()
      .then(res => {
        setMovies(res.results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, []);

  if (status === Status.IDLE) {
    return <div>I don't know</div>;
  }
  if (status === Status.REJECTED) {
    <Error message={error} />;
  }
  if (status === Status.PENDING) {
    <Loader />;
  }
  if (status === Status.RESOLVED) {
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
}
