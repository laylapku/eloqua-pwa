import React, { Component } from "react";
import { withRouter } from "react-router";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import ExploreTabs from "./ExploreTabs";
import ExploreSpeechList from "./ExploreSpeechList.js";

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
        minHeight: "35px",
        marginTop: "8px",
        borderRadius: "5px"
      },
      textColorInherit: {
        "&$selected": {
          background: "RGB(203,125,64,0.6)",
          color: "#fff"
        }
      }
    }
  },
  typography: {
    useNextVariants: true
  }
});

class Explore extends Component {
  render() {
    return (
      /*  <Router>
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <MuiThemeProvider theme={theme}>
                <AppBar>
                  <Tabs value={location.pathname}>
                    <Tab label="All" component={Link} to="/" />
                    <Tab label="Speaker" component={Link} to="/speakerlist" />
                    <Tab label="Category" component={Link} to="/categorylist" />
                  </Tabs>
                </AppBar>
              </MuiThemeProvider>
              <Switch>
                <Route path="/" render={() => <ExploreSpeechList />} />
                <Route
                  path="/speakerlist"
                  render={() => <ExploreSpeakerList />}
                />
                <Route
                  path="/categorylist"
                  render={() => <ExploreCategoryList />}
                />
              </Switch>
            </Fragment>
          )}
        />
      </Router> */
      // <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <ExploreTabs />
        <ExploreSpeechList />
        {/*tabValue === "speech" && <ExploreSpeechList />}
        {tabValue === "speaker" && <ExploreSpeakerList />}
        {tabValue === "category" && <ExploreCategoryList />*}
        {/* <Route
            path="/"
            render={({ location }) => (
              <Fragment>
                <AppBar>
                  <Tabs value={location.pathname}>
                    <Tab label="All" component={Link} to="/all" />
                    <Tab label="Speaker" component={Link} to="/speaker" />
                    <Tab label="Category" component={Link} to="/category" />
                  </Tabs>
                </AppBar>
                <Switch>
                  <Route path="/all" render={() => <ExploreSpeechList />} />
                  <Route
                    path="/speaker"
                    render={() => <ExploreSpeakerList />}
                  />
                  <Route
                    path="/category"
                    render={() => <ExploreCategoryList />}
                  />
                </Switch>
              </Fragment>
            )}
          /> */}
      </MuiThemeProvider>
      //</BrowserRouter>
    );
  }
}

export default withRouter(Explore);
