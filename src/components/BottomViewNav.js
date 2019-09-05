//react
import React from "react";
import { Link, withRouter } from "react-router-dom";

//material ui
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SettingsIcon from "@material-ui/icons/Settings";

const theme = createMuiTheme({
  overrides: {
    MuiBottomNavigation: {
      root: {
        background: "#F4F4F4",
        height: "48px"
      }
    },
    MuiBottomNavigationAction: {
      root: {
        color: "RGB(111,134,131)",
        "&$selected": {
          color: "RGB(203,125,64)"
        }
      }
    }
  },
  typography: {
    useNextVariants: true
  }
});

const BottomViewNav = props => {
  const {
    location: { pathname }
  } = props;

  return (
    <MuiThemeProvider theme={theme}>
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
    </MuiThemeProvider>
  );
};

export default withRouter(BottomViewNav);

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
