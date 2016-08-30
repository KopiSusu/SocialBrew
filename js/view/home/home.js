
import React, { Component } from 'react';
import * as  Actions from './../../actions'

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

class Home extends Component {

    clickHandler() {
        this.props.navigator.push({
          component: 'Files',
        });
    }

    render() {
        return (
            <View style={styles.container}>
                
                <TouchableHighlight onPress={this.clickHandler.bind(this)}>
                    <Text style={styles.description}>
                      Home
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Home

// const mapStateToProp = (state) => {
//     return {
//         user: state.auth.user,
//         selected: state.groups.selected,
//         messages: state.chat.messages,
//         isFetching: state.groups.isFetching
//     }
// }

// export default connect(mapStateToProp, Actions)(Home);