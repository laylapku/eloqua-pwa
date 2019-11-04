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
      <IconButton onClick={props.history.goBack} className={classes.backBtn}>
        <ChevronLeftIcon />
      </IconButton>

      <List>
        <ListItem>
          <ListItemIcon>
            <ContactSupportIcon className={classes.aboutSvg} />
          </ListItemIcon>
          <ListItemText
            primary="VERSION"
            secondary={
              <Typography className={classes.aboutTypo}>1.0</Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PermIdentityIcon className={classes.aboutSvg} />
          </ListItemIcon>
          <ListItemText
            primary="MADE BY"
            secondary={
              <Typography className={classes.aboutTypo}>
                Sean Lee, Layla Ouyang
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <WebIcon className={classes.aboutSvg} />
          </ListItemIcon>
          <ListItemText
            primary="MORE ABOUT US"
            secondary={
              <Typography>
                <a
                  className={classes.aboutLink}
                  href="//seanlee.netlify.com"
                  target="__blank"
                >
                  https://seanlee.netlify.com/
                </a>
                <br />
                <a
                  className={classes.aboutLink}
                  href="//laylaoy.netlify.com"
                  target="__blank"
                >
                  https://laylaoy.netlify.com/
                </a>
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <EmailIcon className={classes.aboutSvg} />
          </ListItemIcon>
          <ListItemText
            primary="GET IN TOUCH"
            secondary={
              <Typography className={classes.aboutTypo}>
                seanleecoder@gmail.com
                <br />
                laylaoy@gmail.com
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
