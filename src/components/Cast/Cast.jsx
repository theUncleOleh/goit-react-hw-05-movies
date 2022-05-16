import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as getAxiosMovie from '../../servis-api/getAxiosMovie';
import s from './Cast.module.css';
import Loader from '../Loader/Loader';
export default function Cast() {
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);
  useEffect(() => {
    setLoading(true);
    getAxiosMovie
      .axiosMovieCast(movieId)
      .then(data => setCredits(data.cast))
      .catch(errorr => console.log(Error))
      .finally(setLoading(false));
  }, [movieId]);

  return (
    <>
      {credits && (
        <ul className={s.list}>
          {credits.map(credit => (
            <li key={credit.id}>
              {credit.name}
              <img
                className={s.image}
                src={`https://image.tmdb.org/t/p/w500/${credit.profile_path} `}
                alt={credit.title}
              />
            </li>
          ))}
        </ul>
      )}
      <Loader loading={loading} />
    </>
  );
}
