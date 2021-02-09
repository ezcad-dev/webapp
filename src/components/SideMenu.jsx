import React from "react";
import { makeStyles } from "@material-ui/core";
import Tree from "../features/tree/Tree";

const useStyles = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "300px",
    height: "100%",
    backgroundColor: "white",
  },
});

export default function SideMenu() {
  const classes = useStyles();
  return (
    <div className={classes.sideMenu}>
      <Tree />
    </div>
  );
}
