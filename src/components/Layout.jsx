import { Outlet } from 'react-router-dom';
import Container from '../components/Container/Container';
import AppBar from './AppBar/AppBar';
export default function Layout() {
  return (
    <>
      <Container>
        <AppBar />
        <Outlet />
      </Container>
    </>
  );
}
