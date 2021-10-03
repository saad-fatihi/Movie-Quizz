import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import { Container, Box } from "./App.styled";
import { Home } from "../pages/Home";
import { GameOver } from "../pages/GameOver";
import { SurveyPage } from "../pages/SurveyPage";
import { ScoreProvider } from "../../context/scoreContext";

const App = () => {
  return (
    <ScoreProvider>
      <Container>
        <Box>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/survey">
                <SurveyPage />
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
    </ScoreProvider>
  );
};

export default App;
