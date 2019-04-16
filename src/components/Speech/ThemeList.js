import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import FilteredList from "./FilteredList";
import speeches from "../../data/speeches.js";

const styles = {
  avatar: {
    margin: 10,
    width: 80,
    height: 80
  }
};

class ThemeList extends Component {
  state = {
    filter: ""
  };

  filterSpeech = value => {
    this.setState({ filter: value });
  };

  render() {
    const { classes } = this.props;
    const themes = [
      ...new Set(
        speeches
          .map(item => item.theme)
          .toString()
          .split(",")
      )
    ];

    return (
      <React.Fragment>
        {this.state.filter === "" ? (
          <Grid container justify="space-around">
            {themes.map((item, index) => (
              <div key={index}>
                <Avatar
                  alt={item}
                  className={classes.avatar}
                  onClick={() => this.filterSpeech(item)}
                />
                <p
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    justifyContent: "space-around"
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </Grid>
        ) : (
          <FilteredList filter={this.state.filter} />
        )}
      </React.Fragment>
    );
  }
}

ThemeList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ThemeList);
