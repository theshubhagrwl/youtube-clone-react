import React from "react";
import VideoCard from "./VideoCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  rVideos: {
    flex: 0.8,
    backgroundColor: theme.palette.background.default,
    padding: "40px 20px",
    paddingBottom: 0,
  },
  heading: {
    marginLeft: "5px",
    marginBottom: "20px",
    color: theme.palette.text.primary,
  },
  videos: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

const RecommendedVideos = () => {
  const classes = useStyles();
  return (
    <div className={classes.rVideos}>
      <h2 className={classes.heading}>Recommended videos</h2>
      <div className={classes.videos}>
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
