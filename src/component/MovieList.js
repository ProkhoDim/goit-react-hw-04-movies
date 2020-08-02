import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';

const MovieList = ({ movies, location }) => {
  return (
    <ul>
      {movies.length > 0 &&
        movies.map(({ title, id, release_date }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `${routes.movies}/${id}`,
                state: {
                  from: location,
                },
              }}
            >
              {title} ({release_date})
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default MovieList;
