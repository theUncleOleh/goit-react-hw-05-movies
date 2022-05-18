import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as getAxiosMovie from '../servis-api/getAxiosMovie';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};
export const useFetchReviews = () => {
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
  return { error, status, reviews };
};
