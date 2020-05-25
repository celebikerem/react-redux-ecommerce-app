import React from "react";

import { Container } from "reactstrap";

import Navi from "../navi/Navi";
import Dasboard from "../root/Dashboard";
import { Switch, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Switch>
        <Route path="/" exact component={Dasboard}></Route>
        <Route path="/product" exact component={Dasboard}></Route>
        <Route path="/cart" exact component={CartDetail}></Route>
      </Switch>
    </Container>
  );
}

export default App;
