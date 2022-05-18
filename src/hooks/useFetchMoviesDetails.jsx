import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as getAxiosMovie from '../servis-api/getAxiosMovie';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

export const useFetchMovieDetails = () => {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  useEffect(() => {
    setStatus(Status.PENDING);
    getAxiosMovie
      .axiosMovieById(movieId)
      .then(res => {
        // console.log(res);
        setMovieDetails(res);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);
  return { movieDetails, status, error };
};
