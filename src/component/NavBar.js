import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

const NavBar = () => {
  return (
    <>
      <ul className="NavList">
        <li className="NavList_item">
          <NavLink
            exact
            to={routes.home}
            className="NavList_link"
            activeClassName="NavList_link__active"
          >
            Home
          </NavLink>
        </li>
        <li className="NavList_item">
          <NavLink
            to={routes.movies}
            className="NavList_link"
            activeClassName="NavList_link__active"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
