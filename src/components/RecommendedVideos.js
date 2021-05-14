import React from "react";
import VideoCard from "./VideoCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  rVideos: {
    flex: 0.85,
    [theme.breakpoints.between("sm", "md")]: {
      flex: 0.95,
    },
    backgroundColor: theme.palette.background.default,
    padding: "40px 20px",
    paddingBottom: 0,
    "& a": {
      textDecoration: "none",
      color: theme.palette.text.primary,
    },
  },
  heading: {
    marginLeft: "5px",
    marginBottom: "20px",
    color: theme.palette.text.primary,
    fontSize: "2em",
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
      {/* <h2 className={classes.heading}>Recommended videos</h2> */}
      <div className={classes.videos}>
        <a href="https://www.youtube.com/watch?v=W9W3TWCwR9s">
          <VideoCard
            title="Cool feature in Microsoft Edge you didn't know! 🔥"
            channel="Shubh Agrawal"
            channelImage="https://yt3.ggpht.com/ytc/AAUvwnjew1oGHjLXwLL2Iu29b6fDMLJxotl91aot1OUR=s176-c-k-c0x00ffffff-no-rj"
            image="https://i.ytimg.com/vi/W9W3TWCwR9s/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDeyNTa3DgmyWAP4XWy_4bFwQQxvA"
            timestamp="1 week ago"
            views="100k Views"
          />{" "}
        </a>

        <a href="https://www.youtube.com/watch?v=JmPd_Olhb_A">
          <VideoCard
            title="Simple way to remove distractions on websites 🔥"
            channel="Shubh Agrawal"
            channelImage="https://yt3.ggpht.com/ytc/AAUvwnjew1oGHjLXwLL2Iu29b6fDMLJxotl91aot1OUR=s176-c-k-c0x00ffffff-no-rj"
            image="https://i.ytimg.com/vi/JmPd_Olhb_A/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVgm7N1teQ6tJ7Hss6pxO8ipNPhg"
            timestamp="1 week ago"
            views="200K Views"
          />
        </a>
        <a href="https://www.youtube.com/watch?v=w9lVl3qwkwE">
          <VideoCard
            title="Budget Tracker | Project Showcase | React + Django"
            channel="Shubh Agrawal"
            channelImage="https://yt3.ggpht.com/ytc/AAUvwnjew1oGHjLXwLL2Iu29b6fDMLJxotl91aot1OUR=s176-c-k-c0x00ffffff-no-rj"
            image="https://i.ytimg.com/vi/w9lVl3qwkwE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCe1E2KjN8M0pkbOwoZgKWWtTLVGg"
            timestamp="3 month ago"
            views="900k Views"
          />
        </a>
        <a href="https://www.youtube.com/watch?v=OleJMuREzBA">
          <VideoCard
            title="Tic Tac Toe In C++ (Console)"
            channel="Shubh Agrawal"
            channelImage="https://yt3.ggpht.com/ytc/AAUvwnjew1oGHjLXwLL2Iu29b6fDMLJxotl91aot1OUR=s176-c-k-c0x00ffffff-no-rj"
            image="https://i.ytimg.com/vi/OleJMuREzBA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBK9whYAosqogESAg6sIi7DGNG_HQ"
            timestamp="1 year ago"
            views="100k Views"
          />
        </a>
        <a href="https://www.youtube.com/watch?v=LBpSBuQ2LRY">
          <VideoCard
            title="Snake Game With Pygame #1"
            channel="Shubh Agrawal"
            channelImage="https://yt3.ggpht.com/ytc/AAUvwnjew1oGHjLXwLL2Iu29b6fDMLJxotl91aot1OUR=s176-c-k-c0x00ffffff-no-rj"
            image="https://i.ytimg.com/vi/9pNHM82r83k/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDy5N8pLj6JwvUouL_Ub3nZizjSzg"
            timestamp="1 year ago"
            views="600k Views"
          />
        </a>
        <a href="https://www.youtube.com/watch?v=uGqmpLLuWZI">
          <VideoCard
            title="Snake Game With Pygame #2"
            channel="Shubh Agrawal"
            channelImage="https://yt3.ggpht.com/ytc/AAUvwnjew1oGHjLXwLL2Iu29b6fDMLJxotl91aot1OUR=s176-c-k-c0x00ffffff-no-rj"
            image="https://i.ytimg.com/vi/Nxe_MnTIva0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWIjEpLGE6SDOkJCpYkSNiN9pnSA"
            timestamp="1 year ago"
            views="650k Views"
          />
        </a>
        <a href="https://www.youtube.com/watch?v=z41mJZ81tYw">
          <VideoCard
            title="Snake Game With Pygame #3"
            channel="Shubh Agrawal"
            channelImage="https://yt3.ggpht.com/ytc/AAUvwnjew1oGHjLXwLL2Iu29b6fDMLJxotl91aot1OUR=s176-c-k-c0x00ffffff-no-rj"
            image="https://i.ytimg.com/vi/mEml6M3g-P8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDK2bWvJ-xmkFIxUwctcAWxMXkeMg"
            timestamp="1 year ago"
            views="730k Views"
          />
        </a>
        <a href="https://youtu.be/1-TZqOsVCNM">
          <VideoCard
            title="How to Get Rich"
            channel="Naval"
            channelImage="https://yt3.ggpht.com/ytc/AAUvwniqNSgIY59Kxpdw07nBtJiyWg7NscvGb1KCGuOl=s88-c-k-c0x00ffffff-no-rj"
            image="https://i.ytimg.com/vi/1-TZqOsVCNM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDBFFr7eRBe8DtZ1ZBc_2UbDHSR9A"
            timestamp="1 year ago"
            views="1.6M Views"
          />
        </a>
        <a href="https://youtu.be/c7Ya5xoy2nw">
          <VideoCard
            title="Photosynthesis Under the Microscope"
            channel="Sci- Inspi"
            channelImage="https://yt3.ggpht.com/ytc/AAUvwnhLgtls_OjT0nGBqq1vAUoAJA7fr4NKx6kkAOJH=s88-c-k-c0x00ffffff-no-rj"
            image="https://i.ytimg.com/vi/c7Ya5xoy2nw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDjKsZh43-UZCwffaJIBGhvKosFAg"
            timestamp="1 year ago"
            views="1.4M Views"
          />
        </a>
      </div>
    </div>
  );
};

export default RecommendedVideos;
