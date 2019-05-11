import React, { Component } from "react";

import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

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

  filterSpeech = filter => {
    this.setState({ filter });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="page-container">
        {this.state.filter === "" ? (
          <Grid container justify="space-around">
            {categories.map((ele, index) => (
              <div key={"category-" + index}>
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

export default withStyles(styles)(CategoryList);
