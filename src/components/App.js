import React from "react";
import GlobalContextProvider from "../data/GlobalContextProvider";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import SelectStudent from "./SelectStudent";
import StudentsInformation from "./StudentsInformation";
import "./App.css";

function App() {
  return (
    <GlobalContextProvider>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact={true}>
            <SelectStudent />
          </Route>
          <Route path="/info">
            <StudentsInformation />
          </Route>
        </Switch>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
