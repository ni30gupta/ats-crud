import React from "react";

import {
  useHistory,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

function App() {
  return (
    <Router>
      <Header />
      <div className="container w-50">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/logout" exact component={Logout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
