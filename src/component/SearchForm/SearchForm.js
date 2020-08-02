import React, { Component } from 'react';

class SearchForm extends Component {
  state = { message: '' };

  componentDidMount() {
    const lastQuery = localStorage.getItem('query');
    lastQuery && this.setState({ message: lastQuery });
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ message: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.message);
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="searchForm">
          <input
            type="text"
            autoComplete="off"
            placeholder="Search movies ..."
            onChange={this.handleChange}
            value={this.state.message}
            className="searchForm_input"
          />
          <button type="submit" className="searchForm_btn">
            Search
          </button>
        </form>
      </>
    );
  }
}

export default SearchForm;
