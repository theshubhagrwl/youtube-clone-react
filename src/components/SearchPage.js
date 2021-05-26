import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

import { makeStyles } from "@material-ui/core/styles";

//redux
import { useSelector, useDispatch } from "react-redux";
import { setLoadingFalse, setLoadingTrue } from "../store/actions";

const useStyles = makeStyles((theme) => ({
  searchPage: {
    flex: 1,
    // [theme.breakpoints.between("sm", "md")]: {
    //   flex: 0.95,
    // },
    background: theme.palette.background.default,
    padding: "20px",
    "& a": {
      textDecoration: "none",
      color: theme.palette.text.primary,
    },
    "& hr": {
      height: "1px",
      border: 0,
      background: theme.palette.grey[600],
      marginTop: "10px",
      marginBottom: "10px",
    },
  },
  filter: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.text.primary,
    fontSize: "0.5rem",
    "& h2": {
      marginLeft: "10px",
    },
  },
}));

const SearchPage = () => {
  const classes = useStyles();

  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  return (
    <div className={classes.searchPage}>
      <div className={classes.filter}>
        <TuneOutlinedIcon />
        <h2
          onClick={() => {
            dispatch(setLoadingFalse());
            // dispatch(setLoadingTrue());
            console.log(loading);
          }}
        >
          FILTERS
        </h2>
      </div>
      <hr />

      <a href="https://www.youtube.com/channel/UC9ko0iHmNfuYEy-akzJviIQ">
        <ChannelRow
          image="https://yt3.ggpht.com/ytc/AAUvwnjew1oGHjLXwLL2Iu29b6fDMLJxotl91aot1OUR=s176-c-k-c0x00ffffff-no-rj"
          channel="Shubh Agrawal"
          verified
          subs="1M"
          noOfVideos="100"
          description="Channel of Shubh Agrawal"
        />
      </a>
      <hr />
      <a href="https://www.youtube.com/watch?v=W9W3TWCwR9s">
        <VideoRow
          views="1.4M"
          channelImg="https://avatars.githubusercontent.com/u/37265683?v=4"
          description="Learn this cool new feature of Microsoft Edge..."
          timestamp="1 week ago"
          channel="Shubh Agrawal"
          title="Cool feature in Microsoft Edge you didn't know! 🔥"
          image="https://i.ytimg.com/vi/W9W3TWCwR9s/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDeyNTa3DgmyWAP4XWy_4bFwQQxvA"
        />
      </a>
      <a href="https://www.youtube.com/watch?v=w9lVl3qwkwE">
        <VideoRow
          views="1.2M"
          channelImg="https://avatars.githubusercontent.com/u/37265683?v=4"
          description="A Full Stack Budget Tracker App made with Django and React... "
          timestamp="1 month ago"
          channel="Shubh Agrawal"
          title="Budget Tracker | Project Showcase | React + Django"
          image="https://i.ytimg.com/vi/w9lVl3qwkwE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCe1E2KjN8M0pkbOwoZgKWWtTLVGg"
        />
      </a>
      <a href="https://www.youtube.com/watch?v=OleJMuREzBA">
        <VideoRow
          views="1.2M"
          channelImg="https://avatars.githubusercontent.com/u/37265683?v=4"
          description="Make Tic Tac Toe with C++"
          timestamp="1 year ago"
          channel="Shubh Agrawal"
          title="Tic Tac Toe In C++ (Console)"
          image="https://i.ytimg.com/vi/OleJMuREzBA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBK9whYAosqogESAg6sIi7DGNG_HQ"
        />
      </a>
    </div>
  );
};

export default SearchPage;
