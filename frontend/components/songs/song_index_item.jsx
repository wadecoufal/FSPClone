import React from 'react';

class SongIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { song } = this.props;

    return (
      <div className="song-index-item">
        <img className="play-btn" src={window.playBtn}></img>

        <div className="song-info">
          <div className="song-title-duration">
            <h4>{song.title}</h4>
            <h4 className="duration">{song.durationStr}</h4>
          </div>
          <div className="song-artist-album">
            <h4 className="artist-album-link">{song.artist.name}</h4>
            <h4 className="artist-album-link">{song.album.title}</h4>
          </div>
        </div>

      </div>
    )
  }
}

export default SongIndexItem;
