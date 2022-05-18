import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as getAxiosMovie from '../servis-api/getAxiosMovie';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};
export const useFetchCast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  useEffect(() => {
    setStatus(Status.PENDING);
    getAxiosMovie
      .axiosMovieCast(movieId)
      .then(data => {
        setCredits(data.cast);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);
  return { error, credits, status };
};
