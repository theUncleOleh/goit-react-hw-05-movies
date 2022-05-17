import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as getAxiosMovie from '../../servis-api/getAxiosMovie';
import Loader from '../Loader/Loader';

import Error from 'components/Error/Error';
import DetailsPageHeading from 'components/DetailsPageHeading/DetailsPageHeading';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};
export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  useEffect(() => {
    setStatus(Status.PENDING);
    getAxiosMovie
      .axiosMovieReviews(movieId)
      .then(res => {
        setReviews(res.results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);
  if (status === Status.IDLE) {
    return <div>Hello</div>;
  }
  if (status === Status.REJECTED) {
    return <Error message={error} />;
  }
  if (status === Status.PENDING) {
    return <Loader />;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <DetailsPageHeading text="Reviews" />
        {reviews && (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
