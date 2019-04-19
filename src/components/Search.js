import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SpeechList from "./Speech/SpeechList.js";
import SpeakerList from "./Speech/SpeakerList.js";
import CategoryList from "./Speech/CategoryList.js";
import BottomBar from "./BottomBar.js";

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#EDEAE0",
        color: "(0,0,0,0.8)"
      }
    },
    MuiTabs: {
      indicator: {
        display: "none"
      }
    },
    MuiTab: {
      root: {
        minHeight: "40px",
        borderRadius: "5px",
        marginTop: "5px"
      },
      "&$selected": {
        background: "RGB(111,134,131,0.6)", //"#c0b283"
        color: "#fff"
      }
    }
  }
});

const styles = theme => ({});

class Search extends Component {
  state = {
    value: 0
  };

  handleTabChange = (event, value) => {
    this.setState({ value });
  };

  handleTabChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <AppBar>
            <Tabs value={value} onChange={this.handleTabChange} centered>
              <Tab label="All" />
              <Tab label="Speaker" />
              <Tab label="Category" />
            </Tabs>
          </AppBar>
        </MuiThemeProvider>
        {value === 0 && <SpeechList />}
        {value === 1 && <SpeakerList />}
        {value === 2 && <CategoryList />}

        <BottomBar />
      </React.Fragment>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Search);
