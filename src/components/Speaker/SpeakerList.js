import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import speakerData from "./speakerData";

const styles = {
  card: {
    margin: "10px 10px",
    width: "100%",
    maxWidth: 200
  },
  title: {
    fontSize: 14
  }
};

const SpeakerList = (props) => {
  const { classes } = props;
  return (
    <div>
    {speakerData.map((item, index) => 
        <Link to={"/speechlist?id=" + item.id} key={index}>
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {item.name}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      )}
    </div>
  );
};

SpeakerList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SpeakerList);
