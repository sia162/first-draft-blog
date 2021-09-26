import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/pages/home/Home";
import Single from "./components/pages/single-blog-page/Single.js";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/single-blog">
            <Single />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
