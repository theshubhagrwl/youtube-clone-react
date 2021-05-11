import "./App.css";
import Header from "./components/Header";
import RecommendedVideos from "./components/RecommendedVideos";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Button, Paper } from "@material-ui/core";
import { useState } from "react";
// import darkTheme from "./Theme";
import { useContext } from "react";

import { ThemeContext } from "./ThemeContext";

function App() {
  const myTheme = useContext(ThemeContext);

  const theme = createMuiTheme({
    palette: {
      type: myTheme.darkMode ? "dark" : "light",
      // background : {
      //   paper :  "" ,
      //   default : "" ,
      // }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            myTheme.setDarkMode(!myTheme.darkMode);
          }}
        >
          Switch Theme
        </Button>
        <div className="App">
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <div className="app__page">
                  <Sidebar />
                  <RecommendedVideos />
                </div>
              </Route>
              <Route path="/search/:searchTerm">
                <div className="app__page">
                  <Sidebar />
                  <SearchPage />
                </div>
              </Route>
            </Switch>
          </Router>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
