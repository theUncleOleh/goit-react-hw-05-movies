import PropagateLoader from 'react-spinners/PropagateLoader';
import { useState } from 'react';
import s from './Loader.module.css';
export default function Loader() {
  const [color, setColor] = useState('#2d3ac4');
  return (
    <div className={s.loader}>
      <PropagateLoader color={color} size={25} />
    </div>
  );
}
