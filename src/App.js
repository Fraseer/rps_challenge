import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from "./components/WelcomePage";
import Game from "./components/GamePage";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/" component={Game}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
