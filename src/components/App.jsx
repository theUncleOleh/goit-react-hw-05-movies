import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Layout from './Layout';
import Loader from './Loader/Loader';
// import HomePage from '../pages/HomePage/HomePage';

// import MovieDetailsPage from '../pages/MovieDetailsPage';

// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
// import NotFoundPage from 'pages/Not FoundPage';

const HomePage = lazy(() =>
  import('../pages/HomePage' /*webpackChunkName: "home-page"*/)
);
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage' /*webpackChunkName: "movie-details"*/)
);
const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage' /*webpackChunkName: "not-found"*/)
);
const Movie = lazy(() =>
  import('../pages/Movie' /*webpackChunkName: "movie"*/)
);
const Cast = lazy(() => import('../pages/Cast' /*webpackChunkName: "cast"*/));
const Reviews = lazy(() =>
  import('../pages/Reviews' /*webpackChunkName: "reviews"*/)
);
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
}
