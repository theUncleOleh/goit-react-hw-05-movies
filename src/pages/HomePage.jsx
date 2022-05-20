import PageHeading from 'components/PageHeading/PageHeading';
import { useState, useEffect } from 'react';
import CardInCardList from '../components/CardList/CardList';
// import s from './HomePage.module.css';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import * as getAxiosMovie from '../servis-api/getAxiosMovie';
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
        <CardInCardList movies={movies} />
      </>
    );
  }
}
