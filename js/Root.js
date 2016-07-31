/* @flow */

import React from 'react';
import { Provider } from "react-redux";
import configureStore from "./store/configure-store";
import Featured from "./components/Featured";

const store = configureStore();

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Featured />
      </Provider>
    );
  }
}

export default Root;
