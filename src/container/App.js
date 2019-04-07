import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RootPlayer from "../components/Player/RootPlayer.js";
import DailyRecommend from "../components/DailyRecommend.js";
import Search from "../components/Search.js";
import Favorites from "../components/Favorites.js";
import Account from "../components/Account.js";
import About from "../components/About.js";
import Text from "../components/Text.js";
import PlayList from "../components/Speech/PlayList.js";

const App = () => {
  return (
    <Router>
      <div>
        <RootPlayer />
        <Switch>
          <Route exact path="/" component={DailyRecommend} />
          <Route path="/search" component={Search} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/account" component={Account} />
          <Route path="/text" component={Text} />
          <Route path="/playlist" component={PlayList} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
