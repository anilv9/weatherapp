import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "store/rootReducer";

import WeatherDetailsPage from "pages/WeatherDetailsPage";
import FiveDaysWeatherData from "pages/FiveDaysWeatherData";

const middlewares = [thunk];
const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={WeatherDetailsPage} />
          <Route exact path="/five-days-weather/:cityName" component={FiveDaysWeatherData} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;
