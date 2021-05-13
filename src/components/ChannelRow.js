import React from "react";
import { Avatar } from "@material-ui/core";
import VerifiedIcons from "@material-ui/icons/CheckCircleOutlineOutlined";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  channelRow: {
    display: "flex",
    alignItems: "center",
    width: "70vw",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  channelRowText: {
    display: "flex",
    flexDirection: "column",
    "& p": {
      color: theme.palette.text.primary,
      fontSize: "0.8rem",
    },
    "& h4": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 0,
      marginBottom: 0,
    },
  },
  channelLogo: {
    height: "120px",
    width: "120px",
    margin: "10px 60px",
  },
}));

const ChannelRow = ({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.channelRow}>
      <Avatar className={classes.channelLogo} alt={channel} src={image} />
      <div className={classes.channelRowText}>
        <h4>
          {channel} {verified && <VerifiedIcons />}
        </h4>
        <p>
          {subs} subscribers . {noOfVideos} videos <br />
          {description}
        </p>
      </div>
    </div>
  );
};

export default ChannelRow;
