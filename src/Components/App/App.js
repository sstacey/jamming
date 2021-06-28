import React from 'react'
import './App.css';

import Spotify from '../../util/Spotify.js'


import SearchResults from '../SearchResults/SearchResults.js'
import Playlist from '../Playlist/Playlist.js'
import SearchBar from '../SearchBar/SearchBar.js'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: []
    }
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)
  }

  addTrack(track) {
    const foundTrack = this.state.playlistTracks.some((playlistTrack) => playlistTrack.id === track.id)
    const searchResults = this.state.searchResults.filter((result) => result.id !== track.id)
    if (!foundTrack) {
      this.setState({
        playlistTracks: this.state.playlistTracks.concat(track),
        searchResults
      })
    }
  }

  removeTrack(track) {
    const newPlaylistTracks = this.state.playlistTracks.filter((playlistTrack) => playlistTrack.id !== track.id)
    this.setState({
      playlistTracks: newPlaylistTracks,
      searchResults: this.state.searchResults.concat(track)
    })
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    })
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map((track) => track.uri)
    Spotify.savePlaylist(this.state.playlistName, trackURIs)
    this.setState({
      playlistName: 'New Playlist',
      playlistTracks: []
    })


  }

  async search(term) {
    const results = await Spotify.search(term)
    this.setState({
      searchResults: results
    })
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar
              onSearch={this.search} />
          <div className="App-playlist">
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
