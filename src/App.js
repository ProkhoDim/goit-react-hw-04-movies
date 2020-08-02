import React, { lazy, Suspense } from 'react';
import routes from './routes';
import { Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import NavBar from './component/NavBar';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);

const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage' /* webpackChunkName: "movies-details-page" */
  ),
);

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <Suspense
        fallback={
          <Loader
            type="Circles"
            color="#3f51b5"
            height={80}
            width={80}
            className="Loader"
          />
        }
      >
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route
            path={`${routes.movies}/:movieId`}
            component={MovieDetailsPage}
          />
          <h2>not found</h2>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
