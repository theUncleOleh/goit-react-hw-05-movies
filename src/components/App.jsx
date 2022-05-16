import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import PropTypes from 'prop-types';
import HomePage from '../pages/HomePage/HomePage';
import Layout from './Layout';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import Movie from '../pages/Movie';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movie />}>
          <Route path=":movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

