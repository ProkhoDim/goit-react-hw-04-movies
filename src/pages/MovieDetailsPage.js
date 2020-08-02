import React, { Component, lazy, Suspense } from 'react';
import apiService from '../services/apiServices';
import { Route, Redirect } from 'react-router-dom';
import routes from '../routes';
import Loader from 'react-loader-spinner';
import MovieDetails from '../component/MovieDetails';
import MovieInfo from '../component/MovieInfo';

const Cast = lazy(() =>
  import('../component/Cast' /* webpackChunkName: "cast" */),
);

const Reviews = lazy(() =>
  import('../component/Reviews' /* webpackChunkName: "reviews" */),
);

class MovieDetailsPage extends Component {
  state = {
    title: '',
    id: 0,
    overview: '',
    release_date: '',
    genres: [],
    vote_average: 0,
    poster_path: '',
    error: null,
    location_from: '',
  };

  async componentDidMount() {
    const { state } = this.props.location;

    state && state.from && this.setState({ location_from: { ...state.from } });
    try {
      const response = await apiService.getMoviesById(
        this.props.match.params.movieId,
      );
      this.setState({
        ...response,
        error: null,
      });
    } catch (error) {
      this.setState({ error });
    }
  }

  handleGoBack = e => {
    const { location_from } = this.state;
    const { history } = this.props;
    if (location_from) {
      history.push(location_from);
      return;
    }
    history.push(`${routes.home}`);
  };

  render() {
    const { id, error } = this.state;
    return (
      <div className="container">
        <button
          type="button"
          onClick={this.handleGoBack}
          className="goBackButton"
        >
          Go back
        </button>

        <MovieDetails props={this.state} />

        <MovieInfo id={id} />

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
          <Route
            path={`${routes.movies}/${id}/cast`}
            render={() => {
              const { movieId } = this.props.match.params;
              return <Cast id={movieId} />;
            }}
          />

          <Route
            path={`${routes.movies}/${id}/reviews`}
            render={() => {
              const { movieId } = this.props.match.params;
              return <Reviews id={movieId} />;
            }}
          />
          {error && <Redirect to={routes.home} />}
        </Suspense>
      </div>
    );
  }
}

export default MovieDetailsPage;
