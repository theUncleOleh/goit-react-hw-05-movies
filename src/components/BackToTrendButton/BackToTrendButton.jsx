import { useLocation, useNavigate } from 'react-router-dom';
import s from './BackToTrendButton.module.css';
export default function BackToTrendButton() {
  const location = useLocation();
  const navigate = useNavigate();
  const backToTrendButton = () => {
    navigate(location?.state?.from ?? '/');
  };
  return (
    <button type="button" onClick={backToTrendButton} className={s.button}>
      Back to trend
    </button>
  );
}
