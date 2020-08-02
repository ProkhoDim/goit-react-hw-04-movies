import React from 'react';
import PropTypes from 'prop-types';

const MovieDetails = ({
  props: { title, overview, release_date, genres, vote_average, poster_path },
}) => {
  return (
    <div className="MovieDetails">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        className="MovieDetails_poster"
      />

      <div className="MovieDetails_text">
        <h2 className="title">
          {title} ({release_date})
        </h2>
        <p className="descr">User score: {vote_average * 10}%</p>
        <h3 className="title">Overview</h3>
        <p className="descr">{overview}</p>
        <h4 className="title">Genres</h4>
        <p className="descr">{genres.join(', ')}</p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  props: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
  }),
};

export default MovieDetails;
