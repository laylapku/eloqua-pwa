// react
import React from "react";

// material ui
import {
  Container,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import EmailIcon from "@material-ui/icons/Email";
import WebIcon from "@material-ui/icons/Web";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";

// styles
import useStyles from "../styles/customizedStyles";

const SettingsAboutTab = props => {
  const classes = useStyles();

  return (
    <Container>
      <IconButton
        onClick={props.history.goBack}
        classes={{ root: classes.backBtn }}
      >
        <ChevronLeftIcon />
      </IconButton>

      <List>
        <ListItem>
          <ListItemIcon>
            <ContactSupportIcon className={classes.svgIcon} />
          </ListItemIcon>
          <ListItemText
            primary="Version"
            secondary={
              <Typography className={classes.aboutTypo}>1.0</Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PermIdentityIcon className={classes.svgIcon} />
          </ListItemIcon>
          <ListItemText
            primary="Created by"
            secondary={
              <Typography className={classes.aboutTypo}>
                Layla Ouyang, Sean Lee
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <WebIcon className={classes.svgIcon} />
          </ListItemIcon>
          <ListItemText
            primary="Github"
            secondary={
              <Typography className={classes.aboutTypo}>
                https://github.com/laylapku
                <br />
                https://github.com/ilovepku
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <EmailIcon className={classes.svgIcon} />
          </ListItemIcon>
          <ListItemText
            primary="Get in Touch"
            secondary={
              <Typography className={classes.aboutTypo}>
                ouyangleilei515@gmail.com
                <br />
                seanleecoder@gmail.com
              </Typography>
            }
          />
        </ListItem>
      </List>

      <footer className={classes.aboutFooter}>
        <Typography>copyright © 2019 - </Typography>
      </footer>
    </Container>
  );
};

export default SettingsAboutTab;
