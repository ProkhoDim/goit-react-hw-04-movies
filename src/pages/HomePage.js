import React, { Component } from 'react';
import apiService from '../services/apiServices';
import MovieList from '../component/MovieList';

class HomePage extends Component {
  state = { popularFilms: [] };
  async componentDidMount() {
    localStorage.removeItem('query');
    const response = await apiService.getPopularMovies();
    response.length > 0
      ? this.setState({ popularFilms: [...response] })
      : console.log(response);
  }
  render() {
    const { popularFilms } = this.state;
    return (
      <div className="container">
        <h2 className="title">Trending today</h2>
        <MovieList movies={popularFilms} {...this.props} />
      </div>
    );
  }
}

export default HomePage;
