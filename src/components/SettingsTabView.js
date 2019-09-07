//react
import React from "react";
import { withRouter } from "react-router-dom";

//material ui
import { List, ListItem, ListItemText } from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";

//styles
import useStyles from "../styles/customizedStyles";

const SettingsTabView = props => {
  const classes = useStyles();
  const routeChange = path => {
    props.history.push(path);
  };

  return (
    <List>
      <ListItem button onClick={() => routeChange("/about")}>
        <HelpIcon />
        <ListItemText primary="About" className={classes.listItemText} />
        <ChevronRightIcon />
      </ListItem>
      <Divider component="li" />
      <ListItem button onClick={() => routeChange("/theme")}>
        <ColorLensIcon />
        <ListItemText primary="Theme" className={classes.listItemText} />
        <ChevronRightIcon />
      </ListItem>
      <Divider component="li" />
    </List>
  );
};

export default withRouter(SettingsTabView);
