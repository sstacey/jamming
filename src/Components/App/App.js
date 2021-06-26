import React from 'react'
import './App.css';

import SearchResults from '../SearchResults/SearchResults.js'
import Playlist from '../Playlist/Playlist.js'
import SearchBar from '../SearchBar/SearchBar.js'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searchResults: [{
        id: 1,
        uri: 'spotify:track:6rqhFgbbKadb9MLmUQDhG6',
        name: 'Track Name',
        artist: 'Artist',
        album: 'Album'
      },{
        id: 2,
        uri: 'spotify:track:6r23bbKwnb9MLmUQDhG6',
        name: 'Im on one',
        artist: 'Lil Wayne',
        album: 'The Carter 3'  
      }, {
        id: 3,
        uri: 'spotify:track:6rqhFgbbKwnb567mUQDhG6',
        name: 'Im on one',
        artist: 'Lil Wayne',
        album: 'The Carter 3'  
      }],
      playlistName: 'My First Playlist',
      playlistTracks: [{
        id: 1,
        uri: 'spotify:track:6rqhF323wnb9MLmUQDhG6',
        name: 'Track Name 1',
        artist: 'Artist 1',
        album: 'Album 1'
      },{
        id: 2,
        uri: 'spotify:track:6rqhFg3nb9MLmUQDhG6',
        name: 'Track Name 1',
        artist: 'Artist 2',
        album: 'Album 2'
      }]
    }
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)
  }

  addTrack(track) {
    const foundTrack = this.state.playlistTracks.some((playlistTrack) => playlistTrack.id === track.id)
    if (!foundTrack) {
      this.setState({
        playlistTracks: this.state.playlistTracks.concat(track)
      })
    }
  }

  removeTrack(track) {
    const newPlaylistTracks = this.state.playlistTracks.filter((playlistTrack) => playlistTrack.id !== track.id)
    this.setState({
      playlistTracks: newPlaylistTracks
    })
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    })
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map((track) => track.uri)
    console.log(trackURIs)
  }

  search(term) {
    console.log(term)
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* <!-- Add a SearchBar component --> */}
          <div className="App-playlist">
            <SearchBar
              onSearch={this.search} />
            <SearchResults 
              searchResults={this.state.searchResults}
              onAdd={this.addTrack} />
            <Playlist 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onClick={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
