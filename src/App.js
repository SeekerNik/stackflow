import React from "react";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
    </Switch>
  );
}

export default App;
