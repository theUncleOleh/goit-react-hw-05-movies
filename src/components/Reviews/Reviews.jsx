import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as getAxiosMovie from '../../servis-api/getAxiosMovie';
import Loader from '../Loader/Loader';

export default function Reviews() {
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    setLoading(true);
    getAxiosMovie
      .axiosMovieReviews(movieId)
      .then(res => setReviews(res.results))
      .catch(errorr => console.log(Error))
      .finally(setLoading(false));
  }, [movieId]);
  return (
    <>
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

      <Loader loading={loading} />
    </>
  );
}
