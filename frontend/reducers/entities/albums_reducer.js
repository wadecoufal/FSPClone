import {
  RECEIVE_ALBUMS
} from '../../actions/album_actions';

const albumsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALBUMS:
      return action.albums;
    default:
      return state;
  }
}

export default albumsReducer;