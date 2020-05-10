import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Account from "./pages/Account";
import ConversationLanding from "./pages/Conversation/ConversationLanding";
import Chat from "./pages/Conversation/Chat";
import Create from "./pages/Conversation/Create";
import Join from "./pages/Conversation/Join";

import Nav from "./components/Nav";
import "./style.css";
import Footer from "./components/Footer";

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
              <LandingPage />
            </Route>

            <Route path="/account">
              <Account />
            </Route>

            <Route path="/conversation">
                <ConversationLanding />
            </Route>

              <Route path="/create">
                  <Create />
              </Route>

              <Route path="/join">
                  <Join />
              </Route>

              <Route path="/chat">
                  <Chat />
              </Route>

          </Switch>

            <Footer/>
        </div>
      </Router>
  );
}


