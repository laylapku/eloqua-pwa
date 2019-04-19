import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import FilteredList from "./FilteredList";
import categories from "../../data/categories.js";

const styles = {
  root: {
    marginBottom: "100px",
    marginTop: "50px"
  },
  icon: {
    margin: 10,
    width: 80,
    height: 80
  }
};

class CategoryList extends Component {
  state = {
    filter: ""
  };

  filterSpeech = value => {
    this.setState({ filter: value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.state.filter === "" ? (
          <Grid container justify="space-around">
            {categories.map((item, index) => (
              <div key={index}>
                <Avatar
                  alt={item.theme}
                  src={item.icon}
                  className={classes.icon}
                  onClick={() => this.filterSpeech(item.id)}
                />
                <p
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    justifyContent: "space-around"
                  }}
                >
                  {item.theme}
                </p>
              </div>
            ))}
          </Grid>
        ) : (
          <FilteredList categoryFilter={this.state.filter} />
        )}
      </div>
    );
  }
}

CategoryList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CategoryList);
