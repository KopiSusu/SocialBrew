/* @flow */
/*eslint-disable prefer-const */

import React, { Component } from "react";
import Community from "./community/community";

import {
  Navigator,
  View
} from 'react-native';

class Scene extends Component {
  renderScene(route: Object, navigator: Object) {
    // this will render the route. Need to get this working.
    const Component = route.component;
    return (
      <View style={{flex: 1}}>
        <Community />
      </View>
    );
  }
  render() {
    return (
      <Navigator
        style={{flex: 1}}
        renderScene={this.renderScene}
        initialRoute={{
          component: Community,
          title: "Starter App"
        }}
      />
    );
  }
}

export default Scene;