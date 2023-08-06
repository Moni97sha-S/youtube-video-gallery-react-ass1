import React from 'react';
import './styles/App.css';
import { VideoData } from './components/VideoData.js'
import VideoCard from './components/VideoCard.js';

function App() {
  const listItems = VideoData.map(video => 
    <li key={video.id}>
      <VideoCard card = {video} />
    </li>
  );
  return (
    <>
      <ul className="videoCards">{listItems}</ul>
      {/* <VideoCard video = {VideoData[0]} /> */}
      {/* {VideoData.map((item, i) => {
        // console.log(item);
        return <VideoCard card = {item} myey={i} />
      })}  */}
    </>
  );
}

export default App;
