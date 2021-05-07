import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

const RecommendedVideos = () => {
  return (
    <div className="recommendedVideos">
      <h2>Recommended videos</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Hello This is Shubh Agrawal"
          channel="Shubh Agrawal"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjew1oGHjLXwLL2Iu29b6fDMLJxotl91aot1OUR=s176-c-k-c0x00ffffff-no-rj"
          image="http://placeimg.com/200/100"
          timestamp="1 month ago"
          views="1.2M Views"
        />
        <VideoCard
          title="Hello This is Shubh Agrawal"
          channel="Shubh Agrawal"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjew1oGHjLXwLL2Iu29b6fDMLJxotl91aot1OUR=s176-c-k-c0x00ffffff-no-rj"
          image="http://placeimg.com/200/100"
          timestamp="2 month ago"
          views="2.2M Views"
        />
        <VideoCard
          title="Hello This is Shubh Agrawal"
          channel="Shubh Agrawal"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjew1oGHjLXwLL2Iu29b6fDMLJxotl91aot1OUR=s176-c-k-c0x00ffffff-no-rj"
          image="http://placeimg.com/200/100"
          timestamp="3 month ago"
          views="1.3M Views"
        />
      </div>
    </div>
  );
};

export default RecommendedVideos;
