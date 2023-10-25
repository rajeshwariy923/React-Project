import React, { useState } from "react";

const VideoPlayer = () => {
  const [src, setSrc] = useState("path/to/your/video.mp4"); // Set initial video source

  const changeVideo = (newSrc) => {
    setSrc(newSrc);
  };

  return (
    <div>
      <h1>Video Player</h1>
      <video controls src={src} type="video/mp4"></video>
      <button onClick={() => changeVideo("new/video/source.mp4")}>Change Video</button>
    </div>
  );
};

export default VideoPlayer;
