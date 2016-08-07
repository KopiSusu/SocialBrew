
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

class Boards extends Component {
    
    clickHandler() {
        this.props.navigator.push({
          component: 'Boards',
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight>
                    <Text style={styles.description}>
                      BOARDS
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Boards;