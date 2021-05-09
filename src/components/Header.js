import React, { useState } from "react";
// import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  headerLogo: {
    height: "25px",
    objectFit: "contain",
    marginLeft: "20px",
  },
  headerInput: {
    display: "flex",
    alignItems: "center",
    width: "40%",
    border: "1px solid #d3d3d3",
  },
  headerInputField: {
    flex: 1,
    border: "none",
    outline: "none",
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
    "&::placeholder": {
      color: theme.palette.text.secondary,
    },
  },
  headerInputButton: {
    width: "50px",
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    border: "1px solid",
    borderColor: theme.palette.grey[400],
  },
  headerIcons: {
    display: "flex",
    alignItems: "center",
  },
  headerIcon: {
    marginRight: "2vh",
  },
}));
const Header = () => {
  const classes = useStyles();
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className={classes.header}>
      <div className={classes.headerLogo}>
        <MenuIcon />
        <Link to="/">
          <img
            className={classes.headerLogo}
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="Youtube logo"
          />
        </Link>
      </div>
      <div className={classes.headerInput}>
        <input
          type="text"
          placeholder="Search"
          value={inputSearch}
          className={classes.headerInputField}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className={classes.headerInputButton} />
        </Link>
      </div>

      <div className={classes.headerIcons}>
        <VideoCallIcon className={classes.headerIcon} />
        <AppsIcon className={classes.headerIcon} />
        <NotificationsIcon className={classes.headerIcon} />
        <Avatar
          src="https://avatars.githubusercontent.com/u/37265683?v=4"
          alt="avatar image"
        />
      </div>
    </div>
  );
};

export default Header;
