import { NavLink, Outlet } from 'react-router-dom';

import s from './MovieDetailsPage.module.css';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import PageHeading from 'components/PageHeading/PageHeading';
import { useFetchMovieDetails } from '../../hooks/useFetchMoviesDetails';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};
export default function MovieDetailsPage() {
  const { movieDetails, status, error } = useFetchMovieDetails();
  // const { movieId } = useParams();
  // const [error, setError] = useState(null);
  // const [status, setStatus] = useState(Status.IDLE);

  // const [movieDetails, setMovieDetails] = useState(null);
  // useEffect(() => {
  //   setStatus(Status.PENDING);
  //   getAxiosMovie
  //     .axiosMovieById(movieId)
  //     .then(res => {
  //       // console.log(res);
  //       setMovieDetails(res);
  //       setStatus(Status.RESOLVED);
  //     })
  //     .catch(error => {
  //       setError(error);
  //       setStatus(Status.REJECTED);
  //     });
  // }, [movieId]);
  if (status === Status.IDLE) {
    <PageHeading text="Movie Details" />;
  }
  if (status === Status.PENDING) {
    <Loader />;
  }
  if (status === Status.REJECTED) {
    <Error message={error} />;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <PageHeading text="Movie Details" />
        {movieDetails && (
          <>
            <h2>{movieDetails.title}</h2>
            <img
              className={s.image}
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path} `}
              alt={movieDetails.title}
            />
            <p>{movieDetails.tagline}</p>
            <span>{movieDetails.overview}</span>
            <ul>
              {movieDetails.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
            <ul>
              <li>
                <NavLink to={'cast'}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={'reviews'}>Reviews</NavLink>
              </li>
            </ul>
            <hr />
            <Outlet />
          </>
        )}
      </>
    );
  }
}
