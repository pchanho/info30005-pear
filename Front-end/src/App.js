import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Account from "./pages/Account";
import Conversation from "./pages/Conversation/ConversationLanding";
import Join from "./pages/Conversation/Join";
import Create from "./pages/Conversation/Create";
import Chat from "./pages/Conversation/Chat";
import Nav from "./components/Nav";
import "./styles.css";
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

          <Route path="/join">
            <Join />
          </Route>

          <Route path="/chat">
            <Chat />
          </Route>

          <Route path="/create">
            <Create />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}
