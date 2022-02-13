import { Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { Route } from "./Route";
const Routes = () => {
  return (
    <Switch>
      <Route component={Login} exact path="/" />
      <Route component={Dashboard} exact path="/dashboard" isPrivate />
      <Route component={Signup} path="/signup" />
    </Switch>
  );
};

export default Routes;
