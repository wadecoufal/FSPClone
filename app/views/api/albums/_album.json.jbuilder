json.extract! album, :title, :id, :song_ids
json.artistName album.artist.name
json.artistId album.artist.id
json.photoUrl url_for(album.photo)
