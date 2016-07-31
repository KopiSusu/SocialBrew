/* @flow */

import React from 'react';
import { Provider } from "react-redux";
import configureStore from "./store/configure-store";
import Community from "./components/community/community";

const store = configureStore();

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Community />
      </Provider>
    );
  }
}

export default Root;
