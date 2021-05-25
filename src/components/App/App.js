import logo from './logo.svg';
import './App.css';
import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/Playlist';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      SearchResults: [{
        name: 'name1',
        artist: 'artist1',
        album: 'album1',
        id: 1
      },
      {
        name: 'name2',
        artist: 'artist2',
        album: 'album2',
        id: 2
      },
      {
        name: 'name3',
        artist: 'artist3',
        album: 'album3',
        id: 3
      },
      
    ],
    playlistName: 'My Playlist',
    playlistTracks: [{
      name: 'playlistName1',
      artist: 'playlistArtist1',
      album: 'playlistAlbum1',
      id: 4
    },
    {
      name: 'playlistName2',
      artist: 'playlistArtist2',
      album: 'playlistAlbum2',
      id: 5
    },
    {
      name: 'playlistName3',
      artist: 'playlistArtist3',
      album: 'playlistAlbum3',
      id: 6
    }
  ]
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
  }

  search(term) {
    console.log(term)
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
