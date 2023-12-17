import { registerRootComponent } from "expo";
import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "./Store/configureStore";
import rootReducer from "./reducers";

import App from "./App";

const ReduxApp = () => {
  <Provider store={configureStore}>
    <App />
  </Provider>;
};

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
