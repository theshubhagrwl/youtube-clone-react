import React, { useState, useContext } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeContext } from "../ThemeContext";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Button } from "@material-ui/core";

//redux
import { connect } from "react-redux";
import { setLoadingFalse, setLoadingTrue } from "../store/actions";

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
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "10px",
    },
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
    [theme.breakpoints.down("xs")]: {
      width: "30px",
    },
  },
  searchIcon: {
    display: "flex",
    alignItems: "center",
  },
  headerIcons: {
    display: "flex",
    alignItems: "center",
    float: "left",
  },
  headerIcon: {
    marginRight: "2vh",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const Header = ({ loading, setLoadingTrue, setLoadingFalse }) => {
  const theme = useContext(ThemeContext);
  const classes = useStyles();
  const [inputSearch, setInputSearch] = useState("");

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            theme.setDarkMode(!theme.darkMode);
          }}
        >
          Switch Theme
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.header}>
      <div className={classes.headerLogo}>
        <div
          onClick={() => {
            setLoadingFalse();
            console.log("This is coming from Redux", loading);
          }}
        >
          <MenuIcon />
        </div>
        <Link to="/">
          <img
            className={classes.headerLogo}
            src={
              theme.darkMode
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/YouTube_light_logo_%282017%29.svg/1200px-YouTube_light_logo_%282017%29.svg.png"
                : "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            }
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
        <Toolbar>
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <Avatar
                src="https://avatars.githubusercontent.com/u/37265683?v=4"
                alt="avatar image"
              />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <Avatar
                src="https://avatars.githubusercontent.com/u/37265683?v=4"
                alt="avatar image"
              />
            </IconButton>
          </div>
        </Toolbar>
        {renderMobileMenu}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state,
});

const mapDispatchToProps = (dispatch) => ({
  setLoadingTrue: () => {
    dispatch(setLoadingTrue());
  },
  setLoadingFalse: () => {
    dispatch(setLoadingFalse());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
