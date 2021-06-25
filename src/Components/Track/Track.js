import './Track.css'

export class Track extends React.Component {

    renderAction() {
        return (
            <button class="Track-action">{this.props.isRemoval ? '-' : '+'}</button>
        )
    }

    render() {
        return (
            <div class="Track">
                <div class="Track-information">
                    {/* <h3><!-- track name will go here --></h3> */}
                    {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
                </div>
                {this.renderAction()}
            </div>
        )
    }
}