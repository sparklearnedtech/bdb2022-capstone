import React from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from "./components/Homepage";
import StakingApp from "./components/StakingApp";
import NavMenu from "./components/NavMenu";

const App = () => {
  return (
    <Router>
      <NavMenu />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/staking" component={StakingApp} />
      </Switch>
    </Router>
  );
};

export default App;
