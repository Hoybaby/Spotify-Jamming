import logo from './logo.svg';
import './App.css';
import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/Playlist';

import Spotify from '../../util/Spotify';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      SearchResults: [],
    playlistName: 'My Playlist',
    playlistTracks: []
    };

    this.addTrack = this.addTrack.bind(this);

    this.removeTrack = this.removeTrack.bind(this);

    this.updatePlaylistName = this.updatePlaylistName.bind(this);

    this.savePlaylist = this.savePlaylist.bind(this);

    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    // if our track that we are attempting to pass in is matched up to our savedTrack, it will not doing anything but if it isnt, it will be pushed
    if(tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({playlistTracks: tracks})
  }

  removeTrack(track){
    let tracks = this.state.playlistTracks;
    // the filter method will take a look at everything in the array
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id); 
      
    
    this.setState({playlistTracks: tracks})

  }

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }

  savePlaylist() {
    // at this moment, my songs do not have uris attached to them but this map function will cycle through and place it in a new array for the uris
    alert("this method is linked properly")
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlayList(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
    })
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults})
    })
  }

  render() {
    return (
      <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar onSearch={this.search}/>
      <div className="App-playlist">
        <SearchResults searchResults={this.state.SearchResults}
        onAdd={this.addTrack}
        />
        <PlayList playlistName={this.state.playlistName} 
        playlistTracks={this.state.playlistTracks}
        onRemove={this.removeTrack}
        onNameChange={this.updatePlaylistName}
        onSave={this.savePlaylist}
        />
      </div>
    </div>
  </div>
    );
  }
  
}

export default App;
