import React from "react";

import { Container } from "reactstrap";

import Navi from "../navi/Navi";
import Dasboard from "../root/Dashboard";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Dasboard></Dasboard>
    </Container>
  );
}

export default App;
