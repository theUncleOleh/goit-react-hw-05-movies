import Loader from '../components/Loader/Loader';
import Error from 'components/Error/Error';
import DetailsPageHeading from '../components/DetailsPageHeading/DetailsPageHeading';
import { useFetchCast } from '../hooks/useFetchCast';

import BackToAllMovies from '../components/BackToAllMovies/BackToAllMovies';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

export default function Cast() {
  // const { movieId } = useParams();
  // const [credits, setCredits] = useState(null);
  // const [error, setError] = useState(null);
  // const [status, setStatus] = useState(Status.IDLE);

  // useEffect(() => {
  //   setStatus(Status.PENDING);
  //   getAxiosMovie
  //     .axiosMovieCast(movieId)
  //     .then(data => {
  //       setCredits(data.cast);
  //       setStatus(Status.RESOLVED);
  //     })
  //     .catch(error => {
  //       setError(error);
  //       setStatus(Status.REJECTED);
  //     });
  // }, [movieId]);
  const { error, credits, status } = useFetchCast();

  if (status === Status.IDLE) {
    return <div>Hello</div>;
  }
  if (status === Status.PENDING) {
    return <Loader />;
  }
  if (status === Status.REJECTED) {
    return <Error message={error} />;
  }
  if (status === Status.RESOLVED) {
    return (
      <>
        <DetailsPageHeading text="Cast" />
        <BackToAllMovies />

        {credits && (
          <ul>
            {credits.map(credit => (
              <li key={credit.id}>
                <p>{credit.name}</p>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${credit.profile_path} `}
                  alt={credit.title}
                />
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
