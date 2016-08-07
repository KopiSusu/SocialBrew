/* @flow */
/*eslint-disable prefer-const */

import React, { Component } from "react";
import Community from "./community/community";
import Boards from "./boards/boards";

import {
  Navigator,
  View
} from 'react-native';

const routes = {
  'Community': Community,
  'Boards': Boards
}

class Scene extends React.Component {

  renderScene(route: Object, navigator: Object) {
    let Component = routes[route.component];
    return (
      <View style={{flex: 1}}>
        <Component
          navigator={navigator}
          route={route}
        />
      </View>
    );
  }
  render() {
    return (
      <Navigator
        style={{flex: 1}}
        renderScene={this.renderScene}
        initialRoute={{
          component: 'Community',
        }}
      />
    );
  }
}

export default Scene;