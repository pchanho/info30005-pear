import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandinPage from "./pages/LandinPage";
import Account from "./pages/Accounts";
import Conversation from "./pages/Conversation";
import Nav from "./components/Nav";
import "./style.css";

export default function App() {
  return (
      <Router>
        <div className="App">
          <Nav />

          {/* the content */}
          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>

            <Route exact path="/">
              <LandinPage />
            </Route>

            <Route path="/account">
              <Account />
            </Route>

            <Route path="/account">
                <Conversation />
            </Route>

          </Switch>
        </div>
      </Router>
  );
}


