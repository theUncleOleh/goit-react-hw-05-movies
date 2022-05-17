import PageHeading from '../PageHeading/PageHeading';
import { NavLink } from 'react-router-dom';
import SearchData from '../SearchData/SearchData';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import * as getAxiosMovie from '../../servis-api/getAxiosMovie';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};
export default function Movie() {
  const [searchQuery, setSearchQuery] = useState(null);
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const handleSubmit = query => {
    setSearchQuery(query);
    setMovies([]);
    console.log(query);
  };
  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setStatus(Status.PENDING);
    getAxiosMovie
      .axiosSearchMovies(searchQuery)
      .then(res => {
        setMovies(res.results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [searchQuery]);
  if (status === Status.IDLE) {
    return (
      <>
        <PageHeading text="Movie" />
        <SearchData onSubmit={handleSubmit} />
      </>
    );
  }
  if (status === Status.RESOLVED) {
    return (
      <>
        {' '}
        <PageHeading text="Movie" />
        <SearchData onSubmit={handleSubmit} />
        {movies && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <NavLink to={`${movie.id}`}>{movie.title}</NavLink>
              </li>
            ))}
          </ul>
        )}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    );
  }
}
