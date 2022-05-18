import s from './Cast.module.css';
import Loader from '../Loader/Loader';
import Error from 'components/Error/Error';
import DetailsPageHeading from '../DetailsPageHeading/DetailsPageHeading';
import { useFetchCast } from '../../hooks/useFetchCast';
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
        {credits && (
          <ul className={s.list}>
            {credits.map(credit => (
              <li key={credit.id}>
                <p>{credit.name}</p>
                <img
                  className={s.image}
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
