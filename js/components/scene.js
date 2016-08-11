/* @flow */
/*eslint-disable prefer-const */

import React, { Component } from "react";
import Home from "./home/home";
import Files from "./files/files";
import Chat from "./chat/chat";
import Calendar from "./calendar/calendar";
import Navbar from "./Common/navbar";


import {
  Navigator,
  View,
  StyleSheet
} from 'react-native';

const routes = {
  Home,
  Files,
  Chat,
  Calendar
}


const styles = StyleSheet.create({
    nav: {
        fontSize: 20,
        backgroundColor: 'white'
    }
});

class Scene extends React.Component {


  renderScene(route: Object, navigator: Object) {
    let Component = routes[route.component];
    return (
      <View style={{flex: 1}}>
        <Component
          navigator={navigator}
          route={route}
        />

        <Navbar
        navigator={navigator}
        route={route}
        activeOne={route} 
        style={styles.nav}/>
        
      </View>
    );
  }
  render() {
    return (
      <Navigator
        style={{flex: 1}}
        renderScene={this.renderScene}
        initialRoute={{
          component: 'Home',
        }}
      />
    );
  }
}

export default Scene;