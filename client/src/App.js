import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login.js";
import Settings from "./components/pages/settings/Settings.js";
import Single from "./components/pages/single-blog-page/Single.js";
import Write from "./components/pages/write/Write.js";
import Register from "./components/pages/register/Register.js";

function App() {
  const user = true;

  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/login">
            {user ? <Home /> : <Login />}
          </Route>

          <Route exact path="/register">
            {user ? <Home /> : <Register />}
          </Route>

          <Route exact path="/settings">
            {user ? <Settings /> : <Register />}
          </Route>

          <Route exact path="/write">
            {user ? <Write /> : <Register />}
          </Route>

          <Route exact path="/post/:postId">
            <Single />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;