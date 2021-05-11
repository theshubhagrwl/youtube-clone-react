import React from "react";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemanVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbsUpAltOutlinedIcon from "@material-ui/icons/ThumbsUpDownOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    flex: 0.2,
    marginRight: "10px",
    backgroundColor: theme.palette.background.paper,
  },
  sidebarHR: {
    height: "1px",
    border: "0px",
    backgroundColor: theme.palette.grey[300],
    marginTop: "10px",
    marginBottom: "10px",
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
      <hr className={classes.sidebarHR} />
      <SidebarRow Icon={VideLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={OndemanVideoIcon} title="Your Videos" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbsUpAltOutlinedIcon} title="Liked Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show More" />
      <hr className={classes.sidebarHR} />
    </div>
  );
};

export default Sidebar;
