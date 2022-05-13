import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import PropTypes from 'prop-types';
import HomePage from '../pages/HomePage';
import Layout from './Layout';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import Movie from '../pages/Movie';
import Cast from '../pages/Cast';
import Reviews from '../pages/Reviews';
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movie" element={<Movie />}>
          <Route path=":movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}




