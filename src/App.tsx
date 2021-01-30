import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import { Todo } from "./contents/todo/main";
import { About } from "./contents/about/main";
import { SVG } from "./contents/svg/main";

const history = createBrowserHistory();

function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path="/svg">
            <SVG />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/master">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
