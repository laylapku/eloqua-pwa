// react
import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { ThemeContext } from "../contexts/theme.context";

// material ui
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Switch
} from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Divider from "@material-ui/core/Divider";

// styles
import useStyles from "../styles/customizedStyles";

const SettingsTabView = props => {
  const { dark, toggleTheme } = useContext(ThemeContext);
  const classes = useStyles();
  const routeChange = path => {
    props.history.push(path);
  };

  return (
    <List>
      <ListItem button onClick={() => routeChange("/about")}>
        <IconButton>
          <HelpIcon />
        </IconButton>
        <ListItemText primary="About" />
        <ChevronRightIcon className={classes.svgIcon} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <IconButton>
          <Brightness3Icon />
        </IconButton>
        <ListItemText primary="Night Mode" />
        <Switch value={!dark} onClick={toggleTheme} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default withRouter(SettingsTabView);
