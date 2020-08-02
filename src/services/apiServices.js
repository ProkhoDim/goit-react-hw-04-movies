import axios from 'axios';

const API_KEY = '168af0fe4d819af69af0e65f181d8d99';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export default {
  async getMovies(query) {
    const {
      data: { results },
    } = await axios.get(
      `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
    );
    return results.map(({ title, id, release_date }) => ({
      title,
      id,
      release_date: release_date.split('').slice(0, 4).join(''),
    }));
  },

  async getPopularMovies() {
    const {
      data: { results },
    } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);

    return results.map(({ title, id, release_date }) => ({
      title,
      id,
      release_date: release_date.split('').slice(0, 4).join(''),
    }));
  },

  async getMoviesById(movieId) {
    const { data } = await axios.get(
      `movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    );
    const {
      title,
      id,
      overview,
      release_date,
      genres,
      vote_average,
      poster_path,
    } = data;

    return {
      title,
      id,
      overview,
      release_date: release_date.split('').slice(0, 4).join(''),
      genres: genres.map(({ name }) => name),
      vote_average,
      poster_path,
    };
  },

  async getMovieReviews(movieId) {
    const {
      data: { results },
    } = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    );

    return results;
  },

  async getMovieCasts(movieId) {
    const {
      data: { cast },
    } = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`);

    return cast
      .map(({ cast_id, character, name, profile_path }) => ({
        cast_id,
        character,
        name,
        profile_path,
      }))
      .slice(0, 20);
  },

  getPosterSrc(posterId) {
    return `https://image.tmdb.org/t/p/w500/${posterId}`;
  },

  getAvatarSrc(avatarId) {
    return `https://image.tmdb.org/t/p/w185/${avatarId}`;
  },
};
