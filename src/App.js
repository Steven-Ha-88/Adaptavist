import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Forecast from "./Components/Forecasts/Forecasts";
import WeatherDetail from "./Components/WeatherDetails/WeatherDetail";
import { Router, Route } from "react-router-dom";
import history from "./history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/forecast" exact component={Forecast} />
          <Route path="/weather" exact component={WeatherDetail} />
        </div>
      </Router>
    </div>
  );
};

export default App;
