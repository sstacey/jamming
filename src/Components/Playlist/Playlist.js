import React from 'react'

import './Playlist.css'

import TrackList from '../TrackList/TrackList.js'

class Playlist extends React.Component {

    constructor(props) {
        super(props)
        this.handleNameChange = this.handleNameChange.bind(this)
    }

    handleNameChange (e) {
        this.props.onNameChange(e.target.value)
    }

    render() {
        const defaultValue = 'New Playlist'
        return (
            <div className="Playlist">
                <input onChange={this.handleNameChange} defaultValue={defaultValue}/>
                <TrackList 
                    trackList={this.props.playlistTracks}
                    onRemove={this.props.onRemove}
                    isRemoval={true} />
                <button onClick={this.props.onClick} className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist