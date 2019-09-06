//react
import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

//material ui
import AppBar from "@material-ui/core/AppBar";

//components
import BottomViewToolbar from "./BottomViewToolbar";
import BottomViewTabs from "./BottomViewTabs";

const BottomView = props => {
  const {
    location: { pathname }
  } = props;

  return (
    <Fragment>
      {pathname !== "/script" && (
        <AppBar style={{ bottom: 0, top: "auto" }}>
          <BottomViewToolbar />
          <BottomViewTabs />
        </AppBar>
      )}
    </Fragment>
  );
};

export default withRouter(BottomView);
