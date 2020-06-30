import React from 'react';
import { connect } from 'react-redux';

// Functional Comp
const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Select a song</div>
    } else {
        return( 
            <div>
                <h3>Details for:</h3>
                <p>Title: {song.title}</p>
                <p>Duration: {song.duration}</p>
            </div>
        )
    }
}

const mapStateToProps =  state => {
   return { song: state.selectedSong }
}

export default connect(mapStateToProps) (SongDetail);
