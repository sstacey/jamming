import React from 'react'

import './TrackList.css'

import Track from '../Track/Track.js'

class TrackList extends React.Component {

    render() {
        const list = this.props.trackList.map((track) => <Track key={track.id} track={track} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} />)

        return (
            <div className="TrackList">
                {list}
            </div>
        )
    }
}

export default TrackList