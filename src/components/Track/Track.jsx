import React from 'react'
import './Track.css';


class Track extends React.Component {

    constructor(props) {
        super(props);

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }
    
    renderAction() {
            if(this.props.isRemoval) {
                return <button className="Track-action" onClick={this.removeTrack}>-</button>
            } else {
                return <button className="Track-action" onClick={this.addTrack}>+</button>
            };
        };

    addTrack(event) {
        // this is gonna check if the track that we want to add as an id that already exists with our current playlist. If it does, it wont be added, if not it will  and upsdate state.
        this.props.onAdd(this.props.track);
    }

    removeTrack(event){
        // the onRemove is the one that is filtering the track
        this.props.onRemove(this.props.track);
    }
    
    
    render() {
        return(
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}


export default Track;