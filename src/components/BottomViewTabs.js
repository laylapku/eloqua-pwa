//react
import React from "react";
import { Link, withRouter } from "react-router-dom";

//material ui
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SettingsIcon from "@material-ui/icons/Settings";

const BottomViewTabs = props => {
  const {
    location: { pathname }
  } = props;

  return (
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
  );
};

export default withRouter(BottomViewTabs);

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
