import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import PropTypes from 'prop-types';
import HomePage from './HomePage/HomePage';
import Layout from './Layout';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import Movie from './Movie/Movie';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import NotFoundPage from 'pages/Not FoundPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movie />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

