// react
import React, { Fragment } from "react";

// material ui
import { Container, IconButton } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import EmailIcon from "@material-ui/icons/Email";
import WebIcon from "@material-ui/icons/Web";
import StarIcon from "@material-ui/icons/Star";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";

// styles
import useStyles from "../styles/customizedStyles";

const SettingsAboutTab = props => {
  const classes = useStyles();

  return (
    <Fragment>
      <IconButton
        onClick={props.history.goBack}
        classes={{ root: classes.backBtn }}
      >
        <ChevronLeftIcon />
      </IconButton>
      <Container className={classes.aboutMain}>
        <ContactSupportIcon className={classes.aboutIcons} />
        <p>Version</p>
        <p>1.0</p>
        <PermIdentityIcon className={classes.aboutIcons} />
        <p>Created by</p>
        <p>Layla Ouyang & Sean Lee</p>
        <EmailIcon className={classes.aboutIcons} />
        <p>Email</p>
        <p>
          ...@gmail.com
          <br />
          seanleecoder@gmail.com
        </p>
        <WebIcon className={classes.aboutIcons} />
        <p>Github</p>
        <p>
          https://github.com/laylapku/
          <br />
          https://github.com/ilovepku/
        </p>
        <StarIcon className={classes.aboutIcons} />
        <p>Credits</p>
        <p style={{ lineHeight: "1.5rem" }}>
          <strong>@material-ui</strong> for UI components
          <br />
          <strong>react-player</strong> for audio playing
          <br />
          <strong>redux-persist</strong> to persist redux store
          <br />
          <strong>localforage</strong> for local storage
        </p>
        <footer className={classes.aboutFooter}>
          <p>copyright © 2019 - </p>
        </footer>
      </Container>
    </Fragment>
  );
};

export default SettingsAboutTab;
