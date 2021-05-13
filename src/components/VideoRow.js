import React from "react";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  videoRow: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "30px",
    maxWidth: "70vw",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  videoRowImage: {
    objectFit: "contain",
    width: "246px",
    height: "138px",
  },
  videoRowText: {
    display: "flex",
    marginLeft: "14px",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    "& h3": {
      marginTop: "0px",
      marginBottom: "2px",
    },
  },
  videoRowDescription: {
    marginTop: "20px",
    fontSize: "12px",
    color: theme.palette.text.primary,
  },
  videoRowHeadline: {
    fontSize: "12px",
    color: theme.palette.text.primary,
    marginTop: 0,
  },
  channelLogo: {
    width: "2vh",
    height: "2vh",
    marginRight: "5px",
  },
}));

const VideoRow = ({
  views,
  channelImg,
  description,
  timestamp,
  channel,
  title,
  image,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.videoRow}>
      <img className={classes.videoRowImage} src={image} alt={title} />
      <div className={classes.videoRowText}>
        <h3>{title}</h3>
        <p className={classes.videoRowHeadline}>
          {views} views . {timestamp}{" "}
        </p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            className={classes.channelLogo}
            alt={channel}
            src={channelImg}
          />
          {channel}
        </div>
        <p className={classes.videoRowDescription}>{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
