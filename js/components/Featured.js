
import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
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

class Featured extends Component {
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.description}>
              Featured Tab
            </Text>
        </View>
        );
    }
}

module.exports = Featured;