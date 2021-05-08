import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTERS</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AAUvwnjew1oGHjLXwLL2Iu29b6fDMLJxotl91aot1OUR=s176-c-k-c0x00ffffff-no-rj"
        channel="Shubh Agrawal"
        verified
        subs="1M"
        noOfVideos="100"
        description="Channel of Shubh Agrawal"
      />
      <hr />
      <VideoRow
        views="1.4M"
        subs="700K"
        description="This is the video desciption"
        timestamp="1month ago"
        channel="Shubh Agrawal"
        title="Learning To Code"
        image="http://placeimg.com/200/100"
      />
      <VideoRow
        views="1.2M"
        subs="900K"
        description="This is the video desciption"
        timestamp="1month ago"
        channel="Shubh Agrawal"
        title="Learning To Program"
        image="http://placeimg.com/200/100/business"
      />
    </div>
  );
};

export default SearchPage;
