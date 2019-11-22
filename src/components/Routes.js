import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BottomView from "./BottomView";
import PlaylistTabView from "./PlaylistTabView";
import ScriptTabView from "./ScriptTabView";
import ExploreTabView from "./ExploreTabView";
import FavoritesTabView from "./FavoritesTabView";
import SettingsTabView from "./SettingsTabView";
import SettingsAboutTab from "./SettingsAboutTab";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ExploreTabView} />
        <Route exact path="/playlist" component={PlaylistTabView} />
        <Route exact path="/script" component={ScriptTabView} />
        <Route exact path="/favorites" component={FavoritesTabView} />
        <Route exact path="/settings" component={SettingsTabView} />
        <Route exact path="/about" component={SettingsAboutTab} />
      </Switch>
      <BottomView />
    </Router>
  );
};

export default Routes;
