import React, { Component } from 'react';
import apiServices from '../../services/apiServices';

class Cast extends Component {
  state = { actors: [] };
  async componentDidMount() {
    const { id } = this.props;
    const response = await apiServices.getMovieCasts(id);
    this.setState({ actors: response });
  }

  render() {
    return (
      <ul className="castList">
        {this.state.actors.map(({ cast_id, character, name, profile_path }) => (
          <li key={cast_id} className="castList_item">
            <img
              src={apiServices.getAvatarSrc(profile_path)}
              alt={name}
              className="castList_avatar"
            />
            <p>Actor: {name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Cast;
