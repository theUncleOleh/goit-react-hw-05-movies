import { Outlet } from 'react-router-dom';
import PageHeading from '../PageHeading/PageHeading';
import SearchData from '../SearchData/SearchData';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
export default function Movie() {
  const [searchQuery, setSearchQuery] = useState(null);
  const [movies, setMovies] = useState([]);
  const handleSubmit = query => {
    setSearchQuery(query);
    setMovies([]);
    console.log(query);
  };
  return (
    <div>
      <PageHeading text="Movie" />
      <SearchData onSubmit={handleSubmit} />
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
