import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import FilteredList from "./FilteredList";
import categories from "../../data/categories.js";

const styles = {
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
      <div className="page-container">
        {this.state.filter === "" ? (
          <Grid container justify="space-around">
            {categories.map((ele, index) => (
              <div key={index}>
                <Avatar
                  alt={ele.theme}
                  src={ele.icon}
                  className={classes.icon}
                  onClick={() => this.filterSpeech(ele.id)}
                />
                <p
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    justifyContent: "space-around"
                  }}
                >
                  {ele.theme}
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
