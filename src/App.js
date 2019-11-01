import React, { Component } from 'react';
import {Grid} from '@material-ui/core'
import youtube from './api/youtube'
import './App.css'
import {SearchBar, VideoDetail, VideoList} from './Components/index'
const API_KEY = process.env.REACT_APP_API_KEY
console.log(API_KEY)
class App extends Component {
  state = {
    videos: [],
    selectVideo: null
  }
  onVideoSelect = (video) => {
    this.setState({selectVideo: video})
  }
  handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
        params: {
          part: 'snippet',
          maxResults: 5,
          key:  API_KEY,
          q: searchTerm,
         }
  })
    this.setState({videos:response.data.items, selectVideo: response.data.items[0]})

}
  render() {
    const {selectVideo, videos} = this.state
    return (
          <Grid  justify="center" container spacing={10}>
              <Grid item xs={12}>
                <Grid container spacing={10}>
                  <Grid item xs={12}>
                        <SearchBar onFormSubmit={this.handleSubmit}/>
                  </Grid>
                    <Grid item xs={8}>
                        <VideoDetail video={selectVideo}/>
                    </Grid>
                    <Grid item xs={4}>
                        <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                    </Grid>
                </Grid>
              </Grid>
          </Grid>
    )
  }
}

export default App;

