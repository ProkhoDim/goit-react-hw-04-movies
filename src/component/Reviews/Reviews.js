import React, { Component } from 'react';
import apiServices from '../../services/apiServices';

class Reviews extends Component {
  state = { reviews: [] };

  async componentDidMount() {
    const id = this.props.id;
    const response = await apiServices.getMovieReviews(id);

    this.setState({ reviews: response });
  }

  render() {
    const { reviews } = this.state;

    return (
      <ul>
        {reviews.length > 0 ? (
          reviews.map(({ author, content, id }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </ul>
    );
  }
}

export default Reviews;
