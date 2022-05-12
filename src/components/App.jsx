import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import PropTypes from 'prop-types';
import HomePage from './pages/HomePage/HomePage';
import Layout from './Layout';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="details" element={<div>Details</div>} />
        <Route path="movie" element={<div>Movie</div>} />
        <Route path="cast" element={<div>Cast</div>} />
        <Route path="reviews" element={<div>Reviews</div>} />
      </Route>
    </Routes>
  );
}
