import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    // classNames are based on semantic UI
    renderList() {
        return this.props.songs.map((song) => {
            return(
                < div className='item' key={song.title} >
                    <div className='right floated content'>
                        <button 
                            className='ui button primary'
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className='content'>{song.title}</div>
                </div>
            )
        })
    }
    render() { 
        return (  
            <div className='ui divided list'>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // if console.log(state) or return state it returns the songLists
    // but by returning object we can take advantage of it by calling this.props
    // which will return the same but we can use it the way we see fit
    // hence the name map state to props.
    console.log(state);
    return { songs: state.songs}
}

// selectSong = selectSong : selectSong (ES15)
export default connect(mapStateToProps, { selectSong })(SongList);
