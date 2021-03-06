# Cadenze

A music player highlighting the artistry of world class singers, composers, pianists, and other classical musicians.

Check it out [here](https://cadenze.herokuapp.com/#/)!

![alt-text](https://github.com/wadecoufal/Cadenze/blob/master/DemoImage.png)



With Cadenze, users can curate their collection in various ways: creating custom playlists, following their favorite artists, and saving songs and albums to their library. Users can also connect with friends by following their playlists.

The back-end of Cadenze was built using Ruby on Rails and PostgreSQL, with image and song hosting on Amazon S3. The front-end was created with React and Redux, providing a smooth and dynamic user experience.

## Features

### Playlist Creation

Save your favorite music to custom playlists. Add a song to any playlist quick and simply: click on a song, see all your playlists pop-up, and click on the one you want to add the song to.


![alt-text](https://github.com/wadecoufal/Cadenze/blob/master/CreatePlaylistImg.png)



![alt-text](https://github.com/wadecoufal/Cadenze/blob/master/AddingToPlaylistImg.png)


### Search

Search for your favorite album, artist, song, and playlist with the search feature. Results are dynamically rendered thanks to React. As soon as a user starts typing, an ajax request grabs the results that match the current query and React dynamically renders the results to the page. As the user continues to type, the results are updated accordingly.

![alt-text](https://github.com/wadecoufal/Cadenze/blob/master/SearchImg.png)

### Seamless Streaming while Navigating Cadenze

Listen to music while you browse! Check out your favorite artists and albums without breaking up the music. You can also shuffle, loop, and skip songs with ease.

React and Redux were crucial in creating this smooth experience. As a user clicks a song, Redux updates the song queue, and React handles playing the next song. The music player is a top-level React component, allowing it to stream music, unaffected by the rest of the page.

### Favoriting and Following

In addition to creating custom playlists, you can also follow artists, albums, and songs. Check them out in your collection!

```
<div className="collection">
        <Navbar page={page} />
        <Switch>
          <Route path="/collection/albums" render={ () =>
              <AlbumsIndexContainer
                albumIds={favoritedAlbumIds} /> } />

            <Route path="/collection/artists" render={ () =>
                <ArtistsIndexContainer
                  followedArtistIds={followedArtistIds} /> } />

          <Route path="/collection/playlists" render={ () =>
              <PlaylistsIndexContainer
                currUserId={this.props.currUserId}
                followedPlaylistIds={followedPlaylistIds}/> } />

          <Route path="/collection/songs" render={ () =>
              <SongsIndexContainer
                songIds={favoritedSongIds}/> } />

          <Redirect to="/collection/albums" />
        </Switch>
      </div>
```

![alt-text](https://github.com/wadecoufal/Cadenze/blob/master/CollectionImg.png)
