//react
import React, { Fragment, useEffect } from "react";

//material ui
import { Container, IconButton } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import EmailIcon from "@material-ui/icons/Email";
import WebIcon from "@material-ui/icons/Web";
import StarIcon from "@material-ui/icons/Star";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";

//styles
import useStyles from "../styles/customizedStyles";
import { firestore } from "../utils/firebase.utils";

import scripts from "../data/scripts";
import speeches from "../data/speeches";
import data from "./data";

const SettingsAboutTab = props => {
  const classes = useStyles();

  useEffect(() => {
    /* const result = speeches.map(speech => {
      return {
        id: speech.id,
        firebaseId: data.find(
          item => item.title === speech.title && item.date === speech.date
        ).id
      };
    });

    const newScripts = scripts.map(text => {
      return {
        ...text,
        speechId: result.find(item => item.id === text.speechId).firebaseId
      };
    });

    const writeScript = () => {
      newScripts.map(ele =>
        firestore
          .collection("speeches")
          .doc(ele.speechId)
          .collection("extra")
          .doc("text")
          .set({
            script: ele.text
          })
      );
    };
    writeScript(); */

  }, []);

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
