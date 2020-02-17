import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import ScheduleGame from "./components/pages/ScheduleGame";
import NotFound from "./components/pages/NotFound";
import Navbar from "./components/layouts/utils/Navbar";
import Alerts from "./components/layouts/utils/Alerts";
import Game from "./components/pages/Game";
import Broadcast from "./components/pages/Broadcast";

import { Provider } from "react-redux";
import store from "./store";
import "./assets/css/App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Navbar />
          <Alerts />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/broadcast" component={Broadcast} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/schedulegame" component={ScheduleGame} />
          <Route exact path="/game/:id" component={Game} />
          <Route exact path="/game/:id" component={Game} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
