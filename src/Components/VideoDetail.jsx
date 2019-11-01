import React from 'react';
import {Paper, Typography} from '@material-ui/core'
// import { Container } from './styles';

export default function VideoDetail({video}) {
    if(!video) return (
    <div>
      <h1 style={{color:'blue'}}>
      Loading...
      </h1>
      </div>
    )
    console.log(video)
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <>
            <Paper elevation={6} style={{height:'70%'}}>
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc}>

                </iframe>
            </Paper>
            <Paper elevation={6} style={{padding:'15px'}}>
                <Typography variant="h4">{video.snippet.title}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description} </Typography>
                
            </Paper>
    </>
  );
}
