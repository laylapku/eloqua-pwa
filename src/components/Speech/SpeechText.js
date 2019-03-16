import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import speechData from "./speechData";

const styles = theme => ({});

const SpeechText = props => {
  const { url } = props;
  return (
    <div style={{ maxHeight: "200px", overflow: "auto" }}>
      {speechData.map(
        (item, index) =>
          item.url === url && (
            <div key={index}>
              <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          )
      )}
    </div>
  );
};

SpeechText.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SpeechText);
