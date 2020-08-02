import React, { Component } from 'react';
import SearchForm from '../component/SearchForm';
import apiService from '../services/apiServices';
import MovieList from '../component/MovieList';

class MoviePage extends Component {
  state = { query: '', filmList: [], error: '', isLoading: false };

  async componentDidMount() {
    const localStorQuery = localStorage.getItem('query');
    localStorQuery && this.setState({ query: localStorQuery });
    localStorage.removeItem('query');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) this.getMovies();
  }

  componentWillUnmount() {
    const { query } = this.state;
    localStorage.setItem('query', query);
  }

  getMovies = async () => {
    const { query } = this.state;
    // this.setState({ filmList: [] });
    try {
      const response = await apiService.getMovies(query);
      this.setState({ filmList: response, error: '' });
    } catch (error) {
      this.setState({
        error: error.response.data.errors.join('!'),
        filmList: [],
      });
    }
  };

  handleSubmit = query => {
    this.setState({ query });
  };

  render() {
    const { filmList, query, error } = this.state;
    return (
      <div className="container">
        <SearchForm onSubmit={this.handleSubmit} />
        <ul>
          {filmList.length > 0 || !query ? (
            <MovieList movies={filmList} {...this.props} />
          ) : (
            <h2 className="title">Nothing's found</h2>
          )}
        </ul>
        {error && <h2 className="title">{error}</h2>}
      </div>
    );
  }
}

export default MoviePage;
