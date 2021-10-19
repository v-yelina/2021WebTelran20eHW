import React from "react";
import GlobalContextProvider from "../data/GlobalContextProvider";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import AllOffers from "./AllOffers";
import CreateOffer from "./CreateOffer";
import OfferPage from "./OfferPage";

import "./App.css";

function App() {
  return (
    <GlobalContextProvider>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact={true} component={AllOffers}></Route>
          <Route path="/create" component={CreateOffer}></Route>
          <Route path="/offer/:offerId" component={OfferPage}></Route>
        </Switch>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
