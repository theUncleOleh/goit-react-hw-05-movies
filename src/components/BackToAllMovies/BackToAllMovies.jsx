import { useLocation, useNavigate } from 'react-router-dom';
import s from './BackToAllMovies.module.css';
export default function BackToAllMovies() {
  const location = useLocation();
  const navigate = useNavigate();
  const backToAllMovies = () => {
    navigate(location?.state?.from.location?.state?.from ?? '/');
  };
  return (
    <button type="button" onClick={backToAllMovies} className={s.button}>
      Back to all movies
    </button>
  );
}
