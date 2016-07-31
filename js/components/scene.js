// /* @flow */
// /*eslint-disable prefer-const */

// import React, { Component } from "react";
// import Community from "./community/community";

// import {
//   Navigator,
//   View
// } from 'react-native';

// class Scene extends Component {
//   renderScene(route: Object, navigator: Object) {
//     // this will render the route. Need to get this working.
//     const Component = route.component;
//     return (
//       <View style={{flex: 1}}>
//         <Community />
//       </View>
//     );
//   }
//   render() {
//     return (
//       <Navigator
//         style={{flex: 1}}
//         renderScene={this.renderScene}
//         initialRoute={{
//           component: Community,
//           title: "Starter App"
//         }}
//       />
//     );
//   }
// }

// export default Scene;

/* @flow */
/*eslint-disable prefer-const */

import React, { Component } from "react";
import NavigationBar from "./navigation-bar";
import Community from "./community/community";
import App from "../App";

import {
  Navigator,
  View
} from 'react-native';

class Scene extends React.Component {
  renderScene(route: Object, navigator: Object) {
    const Component = route.component;
    return (
      <View style={{flex: 1}}>
        <NavigationBar
          backgroundStyle={{backgroundColor: "#eee"}}
          navigator={navigator}
          route={route}
          title={route.title}
          titleColor="#333"
        />
        <Component
          navigator={navigator}
          route={route}
          {...route.passProps}
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
          component: App,
          title: "Social Brew"
        }}
      />
    );
  }
}

export default Scene;