
import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';


class Navbar extends Component {
    constructor(props){
        super(props);
        this.onPress = this.onPress.bind(this);

    }

    componentDidMount(){
       alert(this.props.activeOne.route)
    }

    onPress(val){
         this.props.navigator.push({
          component: val,
        });
    }
    
    render() {
        const poop = this.props.activeOne
        return (
            <View style={styles.container}>
              <TouchableHighlight onPress={() => this.onPress("Home")} underlayColor={'gray'}  style={styles.bottomButtons}>
              <Text style={styles.link}>Home</Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.onPress("Files")} underlayColor={'gray'}  style={styles.bottomButtons}>
              <Text style={styles.link}>Files</Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.onPress("Calendar")} underlayColor={'gray'}  style={styles.bottomButtons}>
              <Text style={styles.link}>Calendar</Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.onPress("Chat")} underlayColor={'gray'}  style={styles.bottomButtons}>
              <Text style={styles.link}>Chat</Text>
              </TouchableHighlight>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {

       position: 'absolute',
      flex:0.1,
      justifyContent: 'space-around',
      left: 0,
      right: 0,
      bottom: 0,
      flexDirection:'row',
      height:50,
      backgroundColor: 'green',
      alignItems:'center',
    },
    link: {
        paddingLeft: 10,
        paddingRight:10
    },
    bottomButtons: {
      alignItems:'center',
      justifyContent: 'center',
      flex:1,
      height: 50
  }

})

export default Navbar;