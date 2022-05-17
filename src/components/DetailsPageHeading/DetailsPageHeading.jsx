import s from './DetailsPageHeading.module.css';

export default function DetailsPageHeading({ text }) {
  return <h1 className={s.title}>{text}</h1>;
}
