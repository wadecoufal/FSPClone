import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';

const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const fetchAlbums = albumIds => dispatch => {
  return AlbumApiUtil.fetchAlbums(albumIds)
    .then(albums => dispatch(receiveAlbums(albums)))
};

export const fetchAlbum = id => dispatch => {
  return AlbumApiUtil.fetchAlbum(id)
    .then(album => dispatch(receiveAlbum(album)))
};

// export const fetchAlbum = id => dispatch => {
//   return AlbumApiUtil.fetchAlbum(id)
//     .then(album => dispatch(receiveAlbums([album])))
// }
