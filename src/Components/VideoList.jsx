import React from 'react';
import {Grid} from '@material-ui/core'
// import { Container } from './styles';
import VideoItem from './VideoItem'
export default function VideoList({videos,onVideoSelect}) {
    const list = videos.map((video, id )=> <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>
    )
  return (
        <Grid container spacing={10}>
                  {list}
                </Grid>
  )
}
