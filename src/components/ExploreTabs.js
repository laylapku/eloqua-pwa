import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default function ExploreTabs() {
  return (
    <AppBar>
      <Tabs centered>
        <Tab label="All" component={Link} to="/" />
        <Tab label="Speaker" component={Link} to="/speaker" />
        <Tab label="Category" component={Link} to="/category" />
      </Tabs>
    </AppBar>
  );
}
