import { Outlet } from 'react-router-dom';
import BackToTrendButton from '../components/BackToTrendButton/BackToTrendButton';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import PageHeading from 'components/PageHeading/PageHeading';
import { useFetchMovieDetails } from '../hooks/useFetchMoviesDetails';
import CardOfOneMovie from '../components/CardOfOneMovie/CardOfOneMovie';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};
export default function MovieDetailsPage() {
  const { movieDetails, status, error } = useFetchMovieDetails();

  if (status === Status.IDLE) {
    <PageHeading text="Movie Details" />;
  }
  if (status === Status.PENDING) {
    <PageHeading text="Movie Details" />;
    <Loader />;
  }
  if (status === Status.REJECTED) {
    <PageHeading text="Movie Details" />;
    <Error message={error} />;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <PageHeading text="Movie details" />
        <BackToTrendButton />
        <CardOfOneMovie movieDetails={movieDetails} />

        <Outlet />
      </>
    );
  }
}
