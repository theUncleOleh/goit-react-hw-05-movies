import s from './DetailsPageHeading.module.css';
import PropTypes from 'prop-types';

export default function DetailsPageHeading({ text }) {
  return <h1 className={s.title}>{text}</h1>;
}

DetailsPageHeading.propTypes = {
  text: PropTypes.string,
};
