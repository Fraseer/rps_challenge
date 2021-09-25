import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from "./components/WelcomePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
