import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Upload from "./components/Upload";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/upload" component={Upload} />
            <Route
              exact
              path="/"
              render={() => {
                return <MainContent id="1af0jruup5gu" />;
              }}
            />
            <Route
              path="/:id"
              render={props => {
                return <MainContent id={props.match.url.slice(1)} />;
              }}
            />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
