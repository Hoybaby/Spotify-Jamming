import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
    render() {
        return(
            <div className="TrackList">
                {
                    this.props.tracks.map(track => {
                        // in each object, i want to pass down the object into the component with the pop
                        return <Track track={track}
                                key={track.id}
                                onAdd={this.props.onAdd}
                                isRemoval={this.props.isRemoval}
                                onRemove={this.props.onRemove}
                                
                                />
                    })
                }
            </div>
        )
    }
}

export default TrackList;