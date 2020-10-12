import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import rootReducer from "store/rootReducer";

const middlewares = [thunk];
function render(
  ui,
  {
    initialState,
    store = createStore(
      rootReducer,
      initialState,
      compose(applyMiddleware(...middlewares))
    ),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router>{children}</Router>
      </Provider>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}
export * from "@testing-library/react";
export { render };
