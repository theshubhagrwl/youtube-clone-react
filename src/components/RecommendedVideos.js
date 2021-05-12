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
        <VideoCard
          title="Cool feature in Microsoft Edge you didn't know! 🔥"
          channel="Shubh Agrawal"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjew1oGHjLXwLL2Iu29b6fDMLJxotl91aot1OUR=s176-c-k-c0x00ffffff-no-rj"
          image="https://i9.ytimg.com/vi_webp/W9W3TWCwR9s/mqdefault.webp?time=1620804000000&sqp=CKCD7oQG&rs=AOn4CLCO1-T5UogiFr7MckPq0tZoR_fVPQ"
          timestamp="1 week ago"
          views="100k Views"
        />
        <VideoCard
          title="Simple way to remove distractions on websites 🔥"
          channel="Shubh Agrawal"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjew1oGHjLXwLL2Iu29b6fDMLJxotl91aot1OUR=s176-c-k-c0x00ffffff-no-rj"
          image="https://i9.ytimg.com/vi_webp/JmPd_Olhb_A/mqdefault.webp?time=1620804000000&sqp=CKCD7oQG&rs=AOn4CLAT9kSTmLvxWn2_Vs6Sxx9-2l3Brg"
          timestamp="1 week ago"
          views="200K Views"
        />
        <VideoCard
          title="Budget Tracker | Project Showcase | React + Django"
          channel="Shubh Agrawal"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjew1oGHjLXwLL2Iu29b6fDMLJxotl91aot1OUR=s176-c-k-c0x00ffffff-no-rj"
          image="https://i.ytimg.com/vi/w9lVl3qwkwE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCe1E2KjN8M0pkbOwoZgKWWtTLVGg"
          timestamp="3 month ago"
          views="900k Views"
        />
        <VideoCard
          title="Tic Tac Toe In C++ (Console)"
          channel="Shubh Agrawal"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjew1oGHjLXwLL2Iu29b6fDMLJxotl91aot1OUR=s176-c-k-c0x00ffffff-no-rj"
          image="https://i9.ytimg.com/vi_webp/OleJMuREzBA/mqdefault.webp?time=1620804000000&sqp=CKCD7oQG&rs=AOn4CLCDWs-xr1Ozp272EPnGsOK3AfjBhA"
          timestamp="1 year ago"
          views="100k Views"
        />
        <VideoCard
          title="Snake Game With Pygame #1"
          channel="Shubh Agrawal"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjew1oGHjLXwLL2Iu29b6fDMLJxotl91aot1OUR=s176-c-k-c0x00ffffff-no-rj"
          image="https://i9.ytimg.com/vi_webp/LBpSBuQ2LRY/mqdefault.webp?time=1620804000000&sqp=CKCD7oQG&rs=AOn4CLDdRnHO2ZHAv4v9mD_ZyqciUH2xdA"
          timestamp="1 year ago"
          views="600k Views"
        />
        <VideoCard
          title="Snake Game With Pygame #2"
          channel="Shubh Agrawal"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjew1oGHjLXwLL2Iu29b6fDMLJxotl91aot1OUR=s176-c-k-c0x00ffffff-no-rj"
          image="https://i9.ytimg.com/vi/uGqmpLLuWZI/mqdefault.jpg?time=1620804000000&sqp=CKCD7oQG&rs=AOn4CLAhZPavFA-HWIiqoamd2ZgHiSttiA"
          timestamp="1 year ago"
          views="650k Views"
        />
        <VideoCard
          title="Snake Game With Pygame #3"
          channel="Shubh Agrawal"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjew1oGHjLXwLL2Iu29b6fDMLJxotl91aot1OUR=s176-c-k-c0x00ffffff-no-rj"
          image="https://i9.ytimg.com/vi/z41mJZ81tYw/mqdefault.jpg?time=1620804000000&sqp=CKCD7oQG&rs=AOn4CLCYhII3AwktzLoZ5Icr9JYo1Qtzcg"
          timestamp="1 year ago"
          views="730k Views"
        />
        <VideoCard
          title="Tic Tac Toe Game With Pygame #1"
          channel="Shubh Agrawal"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjew1oGHjLXwLL2Iu29b6fDMLJxotl91aot1OUR=s176-c-k-c0x00ffffff-no-rj"
          image="https://i9.ytimg.com/vi_webp/9pNHM82r83k/mqdefault.webp?time=1620804000000&sqp=CKCD7oQG&rs=AOn4CLCk0ujKxrBGmHj35F7L2AjXPXmu8Q"
          timestamp="1 year ago"
          views="1.4M Views"
        />
        <VideoCard
          title="Tic Tac Toe Game With Pygame #2"
          channel="Shubh Agrawal"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjew1oGHjLXwLL2Iu29b6fDMLJxotl91aot1OUR=s176-c-k-c0x00ffffff-no-rj"
          image="https://i9.ytimg.com/vi/Nxe_MnTIva0/mqdefault.jpg?time=1620804000000&sqp=CKCD7oQG&rs=AOn4CLCK15KyQfU03VeCCwG2Xk4UG-dNjQ"
          timestamp="1 year ago"
          views="1.2M Views"
        />
        <VideoCard
          title="Tic Tac Toe Game With Pygame #3"
          channel="Shubh Agrawal"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjew1oGHjLXwLL2Iu29b6fDMLJxotl91aot1OUR=s176-c-k-c0x00ffffff-no-rj"
          image="https://i9.ytimg.com/vi/mEml6M3g-P8/mqdefault.jpg?time=1620804000000&sqp=CKCD7oQG&rs=AOn4CLAdfPoDbBJ7xjEBQq4rKugh7bN4lw"
          timestamp="1 year ago"
          views="1M Views"
        />
      </div>
    </div>
  );
};

export default RecommendedVideos;
