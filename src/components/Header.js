import React, { useState, useContext } from "react";
// import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeContext } from "../ThemeContext";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: theme.palette.background.paper,
  },
  headerLogo: {
    height: "2.5vh",
    objectFit: "contain",
    marginLeft: "20px",
  },
  headerInput: {
    display: "flex",
    alignItems: "center",
    width: "40%",
    border: "none",
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      border: "none",
      justifyContent: "flex-end",
    },
  },
  headerInputField: {
    flex: 1,
    border: "none",
    outline: "none",
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    fontSize: "0.8rem",
    padding: "10px",
    "&::placeholder": {
      color: theme.palette.text.secondary,
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  headerInputButton: {
    width: "50px",
    backgroundColor: theme.palette.background.default,
    opacity: 0.4,
    color: theme.palette.text.primary,
    padding: "5px",
  },
  searchIcon: {
    display: "flex",
    alignItems: "center",
  },
  headerIcons: {
    display: "flex",
    alignItems: "center",
  },
  headerIcon: {
    marginRight: "2vh",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
const Header = () => {
  const theme = useContext(ThemeContext);
  const classes = useStyles();
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className={classes.header}>
      <div className={classes.headerLogo}>
        <MenuIcon />
        <Link to="/">
          <img
            className={classes.headerLogo}
            src={
              theme.darkMode
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/YouTube_light_logo_%282017%29.svg/1200px-YouTube_light_logo_%282017%29.svg.png"
                : "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            }
            // src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            //FOr darkMode https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/YouTube_light_logo_%282017%29.svg/1920px-YouTube_light_logo_%282017%29.svg
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
        <Link to={`/search/${inputSearch}`} className={classes.searchIcon}>
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
