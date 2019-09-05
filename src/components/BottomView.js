//react
import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

//material ui
import AppBar from "@material-ui/core/AppBar";

//components
import BottomViewToolbar from "./BottomViewToolbar";
import BottomViewNav from "./BottomViewNav";

const BottomView = props => {
  const {
    location: { pathname }
  } = props;

  return (
    <Fragment>
      {pathname !== "/settings" && pathname !== "/text" && (
        <AppBar style={{ bottom: 0, top: "auto" }}>
          <BottomViewToolbar />
          <BottomViewNav />
        </AppBar>
      )}
    </Fragment>
  );
};

export default withRouter(BottomView);
