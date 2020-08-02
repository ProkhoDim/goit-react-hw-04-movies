import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';
import PropTypes from 'prop-types';

const MovieInfo = ({ id }) => {
  return (
    <div className="movieInformation">
      <p>Additional information</p>
      <ul className="NavList">
        <li className="NavList_item">
          <NavLink
            to={`${routes.movies}/${id}/cast`}
            className="NavList_link"
            activeClassName="NavList_link__active"
          >
            Cast
          </NavLink>
        </li>
        <li className="NavList_item">
          <NavLink
            to={`${routes.movies}/${id}/reviews`}
            className="NavList_link"
            activeClassName="NavList_link__active"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

MovieInfo.propTypes = {
  id: PropTypes.number.isRequired,
};

export default MovieInfo;
