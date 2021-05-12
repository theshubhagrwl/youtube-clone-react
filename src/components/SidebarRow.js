import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { ThemeContext } from "../ThemeContext";

const useStyles = makeStyles((theme) => ({
  sidebarRow: {
    display: "flex",
    alignItems: "center",
    padding: "3px 20px",
    "&:hover": {
      backgroundColor: theme.palette.grey[100],
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px 10px",
      justifyContent: "center",
    },
  },
  sidebarRowDark: {
    display: "flex",
    alignItems: "center",
    padding: "3px 20px",
    "&:hover": {
      backgroundColor: theme.palette.grey[700],
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px 10px",
      justifyContent: "center",
    },
  },
  sidebarRowSelected: {
    backgroundColor: theme.palette.grey[300],
  },
  sidebarRowSelectedDark: {
    backgroundColor: theme.palette.grey[700],
  },
  icon: {
    color: "#909090",
    fontSize: "large",
  },
  selectedIcon: {
    color: "#ff0000",
  },
  selectedIconDark: {
    color: "#fff",
  },
  title: {
    flex: 1,
    marginLeft: "20px",
    fontSize: "0.9em",
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      display: "none",
      visibility: "hidden",
    },
  },
}));

const SidebarRow = ({ selected, Icon, title }) => {
  const myTheme = useContext(ThemeContext);
  const classes = useStyles();
  return (
    <>
      {myTheme.darkMode ? (
        <div
          className={clsx(
            classes.sidebarRowDark,
            selected && classes.sidebarRowSelectedDark
          )}
        >
          <Icon
            className={clsx(classes.icon, selected && classes.selectedIconDark)}
          />
          <h2 className={classes.title}>{title}</h2>
        </div>
      ) : (
        <div
          className={clsx(
            classes.sidebarRow,
            selected && classes.sidebarRowSelected
          )}
        >
          <Icon
            className={clsx(classes.icon, selected && classes.selectedIcon)}
          />
          <h2 className={classes.title}>{title}</h2>
        </div>
      )}
    </>
  );
};

export default SidebarRow;
