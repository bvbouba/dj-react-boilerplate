import React from "react";
import { Route } from "react-router-dom";
import { Login, Signup, HomepageLayout } from "./containers";
import Hoc from "./hoc/hoc";



const BaseRouter = () => (
  <Hoc>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route exact path="/" component={HomepageLayout} />
  </Hoc>
);

export default BaseRouter;