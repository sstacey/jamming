import React from 'react'

import './Playlist.css'

import TrackList from '../TrackList/TrackList.js'

class Playlist extends React.Component {

    render() {
        const defaultValue = 'New Playlist'
        return (
            <div className="Playlist">
                <input defaultValue={defaultValue}/>
                <TrackList 
                    trackList={this.props.playlistTracks}
                    onRemove={this.props.onRemove}
                    isRemoval={true} />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist