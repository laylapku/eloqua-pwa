import React from "react";

import Paper from "@material-ui/core/Paper";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";

import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import EmailIcon from "@material-ui/icons/Email";
import WebIcon from "@material-ui/icons/Web";
import StarIcon from "@material-ui/icons/Star";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";

const theme = createMuiTheme({
  overrides: {
    MuiSvgIcon: {
      root: {
        fill: "RGB(111,134,131)",
        fontSize: "20px"
      }
    }
  },
  typography: {
    useNextVariants: true
  }
});

const styles = theme => ({
  header: {
    ...theme.mixins.gutters(),
    paddingBottom: theme.spacing.unit * 2,
    boxShadow: "none",
    background: "inherit",
    textAlign: "center"
  },
  container: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "8% 25% auto",
    margin: "5px 5px"
  }
});

const About = props => {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.header}>
        <h3>Speech App</h3>
      </Paper>
      <div className={classes.container}>
        <MuiThemeProvider theme={theme}>
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
            <strong>create-react-app, redux, react-redux</strong>
            <br />
            <strong>redux-persist</strong> to persist redux store
          </p>
        </MuiThemeProvider>
      </div>

      <footer
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          textAlign: "center"
        }}
      >
        <p>copyright © 2019 - </p>
      </footer>
    </div>
  );
};

export default withStyles(styles)(About);
