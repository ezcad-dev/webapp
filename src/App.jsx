import React from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import { makeStyles, CssBaseline } from "@material-ui/core";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
// import XzCanvas from "./features/canvas/Canvas-v1";
import XzCanvas from "./features/canvas/Canvas";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "300px",
    height: "100%",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <XzCanvas />
      </div>
      <CssBaseline />
    </React.Fragment>
  );
};

export default App;
