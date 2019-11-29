import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import TopicList from "./TopicList/TopicList";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/topic" component={TopicList} />
  </Switch>
);