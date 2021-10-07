import React from "react";
import GlobalContextProvider from "../data/GlobalContextProvider";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import TodosPage from "./TodosPage";
import PostsPage from "./PostsPage";
import AlbumsPage from "./AlbumsPage";

const App = () => {
  return (
    <GlobalContextProvider>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact={true}>
            <Dashboard />
          </Route>
          <Route path="/todos">
            <TodosPage />
          </Route>
          <Route path="/posts">
            <PostsPage />
          </Route>
          <Route path="/albums">
            <AlbumsPage />
          </Route>
        </Switch>
      </div>
    </GlobalContextProvider>
  );
};

export default App;
