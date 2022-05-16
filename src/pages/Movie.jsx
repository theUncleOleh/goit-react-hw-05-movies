import { Outlet } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';

export default function Movie() {
  return (
    <div>
      <PageHeading text="Movie" />
      <Outlet />
    </div>
  );
}



