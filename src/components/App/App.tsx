import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { Container, Box } from "./App.styled";
import { Survey } from "../pages/Survey";
import { Home } from "../pages/Home";
import { GameOver } from "../pages/GameOver";

const App = () => {
  return (
    <Container>
      <Box>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/survey">
              <Survey />
            </Route>
            <Route path="/over">
              <GameOver />
            </Route>
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </BrowserRouter>
      </Box>
    </Container>
  );
};

export default App;
