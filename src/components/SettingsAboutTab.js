//react
import React, { Fragment } from "react";

//material ui
import Paper from "@material-ui/core/Paper";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import EmailIcon from "@material-ui/icons/Email";
import WebIcon from "@material-ui/icons/Web";
import StarIcon from "@material-ui/icons/Star";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";

//styles
import useStyles from "../styles/customizedStyles";

const SettingsAboutTab = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Paper className={classes.aboutMain}>
        <ContactSupportIcon />
        <p>Version</p>
        <p>1.0</p>
        <PermIdentityIcon />
        <p>Created by</p>
        <p>Layla Ouyang & Sean Lee</p>
        <EmailIcon />
        <p>Email</p>
        <p>
          ...@gmail.com
          <br />
          seanleecoder@gmail.com
        </p>
        <WebIcon />
        <p>Github</p>
        <p>
          https://github.com/laylapku/
          <br />
          https://github.com/ilovepku/
        </p>
        <StarIcon />
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
      </Paper>

      <footer className={classes.aboutFooter}>
        <p>copyright © 2019 - </p>
      </footer>
    </Fragment>
  );
};

export default SettingsAboutTab;
