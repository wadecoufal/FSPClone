import React from 'react';
import PlaylistIndexItem from './playlist_index_item';

class PlaylistsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPlaylists();
    document.getElementById('main-content-2').style.backgroundImage =
      'linear-gradient(rgb(4, 180, 44), rgb(9, 10, 10))'
  }

  render() {
    const playlists = this.props.playlists ? (
      <ul className="item-rows" >
        {this.props.playlists.map( playlist => {
          return (
            <PlaylistIndexItem playlist={playlist} />
          )
        })}
      </ul>
    ) : (
      <div>
        No playlists to see here
      </div>
    )

    return (
      <div className="items-index">
        {playlists}
      </div>
    )
  }

}

export default PlaylistsIndex;
