
import React, { Component } from 'react';
import {connect} from 'react-redux'
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

class Chat extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.fetchData('conversations', '_FETCH_CONVOS')
    }

    clickHandler() {
        this.props.navigator.push({
          component: 'Calendar',
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.clickHandler.bind(this)}>
                    <Text style={styles.description}>
                      Chat
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const mapStateToProp = (state) => {
    return {
        selected: state.chat.selected,
        conversations: state.chat.messages,
        isFetching: state.chat.isFetching
    }
}

export default connect(mapStateToProp, Actions)(Chat);
