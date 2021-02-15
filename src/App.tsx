import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import { Todo } from "./contents/todo/main";
import { About } from "./contents/about/main";
import { PostIt } from "./contents/postIt/main";
import { Index } from "./contents/index/main";
import { NotFound } from "./contents/notfound/main";

const history = createBrowserHistory();

export default function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/post-it" component={PostIt} />
          <Route path="/todo" component={Todo} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}
