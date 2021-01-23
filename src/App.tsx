import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import { Editor } from "./components/editor/main";
import { Master } from "./components/master";

const history = createBrowserHistory();

function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path="/editor">
            <Editor />
          </Route>
          <Route path="/master">
            <Master />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
