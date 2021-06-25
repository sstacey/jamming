import React from 'react'

import './Track.css'

class Track extends React.Component {

    renderAction() {
        return (
            <button class="Track-action">{this.props.isRemoval ? '-' : '+'}</button>
        )
    }

    render() {
        return (
            <div class="Track">
                <div class="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}

export default Track