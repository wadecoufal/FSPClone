import React from 'react';
import ArtistIndexItem from './artist_index_item';
import { ScaleLoader } from 'react-spinners';

class ArtistsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    if (this.props.searchQuery) {
      this.props.fetchArtists({search_query: this.props.searchQuery})
        .then( () => this.setState({loading: false}));
    }else if (this.props.followedArtistIds && this.props.followedArtistIds.length === 0) {
      this.props.fetchArtists({followed_artist_ids: "NoArtistsHere"})
        .then( () => this.setState({loading: false}));
    } else if (this.props.followedArtistIds) {
      this.props.fetchArtists({followed_artist_ids: this.props.followedArtistIds})
        .then( () => this.setState({loading: false}));
    } else {
      this.props.fetchArtists()
        .then( () => this.setState({loading: false}));
    }

    document.getElementById('main-content-2').style.backgroundImage =
      'linear-gradient(rgb(145, 0, 80), rgb(26, 1, 14))'
  }

  componentWillReceiveProps(newProps) {
    if (newProps.searchQuery != this.props.searchQuery) {
      this.props.fetchArtists({search_query: newProps.searchQuery})
        .then( () => this.setState({loading: false}));
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <div className='sweet-loading'>
        <ScaleLoader
          sizeUnit={"px"}
          height={150}
          width={7}
          size={150}
          color={'#1db954'}
          loading={this.state.loading}
        />
      </div>
      )
    }

    const artists = this.props.artists ? (
      <ul className="artist-rows">
        {this.props.artists.map( artist => {
          return (
            <ArtistIndexItem key={artist.id} artist={artist} />
          )
        })}
      </ul>
    ) : (
      <div>
        No artists to see here
      </div>
    )

    return (
      <div className="artists-index">
        {artists}
      </div>
    )
  }

}

export default ArtistsIndex;
