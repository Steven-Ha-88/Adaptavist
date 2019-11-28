import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Weather from "./Components/Forecasts/Forecasts";
import WeatherForecast from "./Components/WeatherDetails/WeatherDetail";
import { Router, Route } from "react-router-dom";
import history from "./history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/weather" exact component={Weather} />
          <Route path="/forecast/:id" exact component={WeatherForecast} />
        </div>
      </Router>
    </div>
  );
};

export default App;
