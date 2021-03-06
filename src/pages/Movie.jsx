import PageHeading from '../components/PageHeading/PageHeading';
import FoundCardMovies from '../components/FoundCardMovies/FoundCardFMovies';
import SearchData from '../components/SearchData/SearchData';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import * as getAxiosMovie from '../servis-api/getAxiosMovie';
import BackToTrendButton from '../components/BackToTrendButton/BackToTrendButton';
import Error from '../components/Error/Error';
import Loader from 'react-spinners/PropagateLoader';
import PropTypes from 'prop-types';

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

  if (status === Status.PENDING) {
    <Loader />;
  }
  if (status === Status.REJECTED) {
    <Error message={error} />;
  }
  if (status === Status.IDLE) {
    return (
      <>
        <PageHeading text="Movie" />
        <BackToTrendButton />
        <SearchData onSubmit={handleSubmit} />
      </>
    );
  }
  if (status === Status.RESOLVED) {
    return (
      <>
        <PageHeading text="Movie" />
        <BackToTrendButton />
        <SearchData onSubmit={handleSubmit} />
        <FoundCardMovies movies={movies} />
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

Movie.propTypes = {
  query: PropTypes.string,
};
