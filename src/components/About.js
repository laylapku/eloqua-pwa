import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import EmailIcon from "@material-ui/icons/Email";
import DescriptionIcon from "@material-ui/icons/Description";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";

const styles = theme => ({
  textContainer: {
    ...theme.mixins.gutters(),
    paddingBottom: theme.spacing.unit * 2,
    boxShadow: "none",
    background: "inherit",
    textAlign: "center"
  }
});

const About = props => {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.textContainer}>
        <p>app logo</p>
        <p>app name</p>
      </Paper>
      <div
        style={{
          display: "grid",
          alignItems: "center",
          gridTemplateColumns: "10% 30% auto",
          margin: "10px 10px"
        }}
      >
        <PermIdentityIcon />
        <p>Developer</p>
        <p>xxx</p>
        <EmailIcon />
        <p>Contact</p>
        <p>xxx</p>
        <DescriptionIcon />
        <p>Story</p>
        <p>
          I know that this is not the last of the smears. In spite of my
          explanation tonight, other smears will be made. Others have been made
          in the past. And the purpose of the smears, I know, is this: to
          silence me; to make me let up. Well, they just don't know who they're
          dealing with. I'm going to tell you this:
        </p>
        <ContactSupportIcon />
        <p>Version</p>
        <p>xxx</p>
      </div>
      <footer
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          textAlign: "center"
        }}
      >
        <p>copyright</p>
      </footer>
    </div>
    /* <div>
      <div style={{ textAlign: "center" }}>
        <h3>Quanto</h3>
        <p>Add first. Edit later.</p>
        <p>Keep continuous track of time with a button click.</p>
      </div>
      <div>
        <h4>
          <strong>Features:</strong>
        </h4>
        <ul>
          <li>Add: Add a new activity</li>
          <li>Split: Insert an activity between two activities</li>
          <li>Interrupt: Interrupt current activity. Click again to resume</li>
          <li>Charts: Visualize your timeline</li>
        </ul>
        <h4>
          <strong>Support:</strong>
        </h4>
        <ul>
          <li>Customize your own activity categories</li>
          <li>Lock screen operations</li>
        </ul>
        <h4>
          <strong>Version</strong>
        </h4>
        <p>1.0.0</p>
        <p>More features coming soon...</p>
      </div>
    </div> */
  );
};

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
