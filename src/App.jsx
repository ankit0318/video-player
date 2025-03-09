import { useEffect, useRef, useState } from "react";
import "./App.css";
function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);
  useEffect(() => {
    if (isPlaying) ref.current.play();
    else ref.current.pause();
  },[isPlaying]);

  return <video ref={ref} src={src} loop className="video-player"></video>;
}

function App() {
  const [isPlaying,setIsPlaying]=useState(false);
  return <>
    <VideoPlayer src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" isPlaying={isPlaying}/>
    <div className="button-container">
      <button onClick={()=>setIsPlaying(true)}>Play</button>
      <button onClick={()=>setIsPlaying(false)}>Pause</button>
    </div>
  </>;
}

export default App;
