import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import EmailIcon from "@material-ui/icons/Email";
import WebIcon from "@material-ui/icons/Web";
import StarIcon from "@material-ui/icons/Star";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";

const theme = createMuiTheme({
  overrides: {
    MuiSvgIcon: {
      root: {
        fill: "#36454F",
        fontSize: "20px"
      }
    },
    typography: { useNextVariants: true }
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
        <p>app logo</p>
        <h3>PWA Quanto</h3>
      </Paper>
      <div className={classes.container}>
        <MuiThemeProvider theme={theme}>
          <ContactSupportIcon />
          <p>Version</p>
          <p>1.0.0</p>
          <PermIdentityIcon />
          <p>Developer</p>
          <p>Sean Lee</p>
          <EmailIcon />
          <p>Email</p>
          <p>seanleecoder@gmail.com</p>
          <WebIcon />
          <p>Github</p>
          <p>https://github.com/ilovepku/</p>
          <StarIcon />
          <p>Credits</p>
          <p style={{ lineHeight: "1.5rem" }}>
            <strong>@material-ui</strong> for UI components
            <br />
            <strong>localforage</strong> for offline storage
            <br />
            <strong>nanoid</strong> as ID generator
            <br />
            <strong>notistack</strong> for notification snackbars
            <br />
            <strong>react-beautiful-dnd</strong> for drag and drop lists
            <br />
            <strong>create-react-app, redux, react-redux</strong>
            <br />
            <strong>redux-persist</strong> to persist redux store
            <br />
            <strong>victory</strong> for data visualization
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
        <p>copyright 2019 - </p>
      </footer>
    </div>
  );
};

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
