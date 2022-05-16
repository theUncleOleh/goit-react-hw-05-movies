import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as getAxiosMovie from '../../servis-api/getAxiosMovie';
import Loader from '../Loader/Loader';
import s from './Reviews.module.css';
// import { Audio } from 'react-loader-spinner';
export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    getAxiosMovie
      .axiosMovieReviews(movieId)
      .then(res => setReviews(res.results))
      .catch(errorr => console.log(Error));
  }, [movieId]);
  return (
    <>
      {reviews ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <Loader />
      )}

      {/* <div className={s.loader}>
        <PropagateLoader color={color} loading={loading} size={25} />
      </div>{' '} */}
    </>
  );
}
