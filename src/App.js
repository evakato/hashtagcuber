import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import Extras from "./components/pages/Extras";
import Home from "./components/pages/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <div className="App">
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/extras" component={Extras} />
          </div>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
