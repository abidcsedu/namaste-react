import { useEffect } from "react";
import { YT_VIDEOS_API } from "../utils/const";

const VideoContainer = () => {
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YT_VIDEOS_API);
  };

  return <div>VideoContainer</div>;
};

export default VideoContainer;
