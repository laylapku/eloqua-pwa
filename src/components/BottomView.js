// react
import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

// material ui
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction
} from "@material-ui/core";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SettingsIcon from "@material-ui/icons/Settings";

// components
import BottomViewToolbar from "./BottomViewToolbar";

const BottomView = ({ location: { pathname } }) => {
  return (
    pathname !== "/script" &&
    pathname !== "/about" && (
      <AppBar style={{ bottom: 0, top: "auto" }}>
        <BottomViewToolbar />
        <BottomNavigation showLabels value={setRouteIndex(pathname)}>
          <BottomNavigationAction
            component={Link}
            to="/"
            label="Explore"
            icon={<ExploreIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/favorites"
            label="Favorites"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/settings"
            label="Settings"
            icon={<SettingsIcon />}
          />
        </BottomNavigation>
      </AppBar>
    )
  );
};

export default withRouter(BottomView);

function setRouteIndex(pathname) {
  switch (pathname) {
    case "/":
      return 0;
    case "/favorites":
      return 1;
    case "/settings":
      return 2;
    default:
      return -1;
  }
}
