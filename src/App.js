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
import Order from "./Order";
import Register from "./Register";
import EditOrder from "./EditOrder";

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
          <Route path="/order" exact component={Order} />
          <Route path="/edit_order/:id" exact component={EditOrder} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
