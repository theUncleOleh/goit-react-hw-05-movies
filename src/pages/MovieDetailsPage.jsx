import PageHeading from 'components/PageHeading/PageHeading';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as getAxiosMovie from '../servis-api/getAxiosMovie';
// import axiosMovieId from '../servis-api/getAxiosMovie';
export default function MovieDetailsPage() {
  const { movieId } = useParams();
  console.log(movieId);
  const [movieDetails, setMovieDetails] = useState(null);
  useEffect(() => {
    getAxiosMovie.axiosMovieById(movieId).then(res => setMovieDetails(res));
  }, [movieId]);

  // useEffect(() => {
  //   axiosMovieId(movieId).then(setMovieDetails);
  // }, [movieId]);

  return (
    <>
      <PageHeading text="About movie" />
      {movieDetails && (
        <>
          <h2>{movieDetails.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path} `}
            alt={movieDetails.title}
          />
          <p>{movieDetails.tagline}</p>
        </>
      )}
    </>
  );
}
