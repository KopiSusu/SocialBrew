
import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

class Calendar extends Component {

    clickHandler() {
        this.props.navigator.push({
          component: 'Home',
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.clickHandler.bind(this)}>
                    <Text style={styles.description}>
                      Calendar
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Calendar;