
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

class Calendar extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.fetchData('events', '_FETCH_EVENTS')
    }

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

const mapStateToProp = (state) => {
    return {
        selected: state.calendar.selected,
        events: state.calendar.messages,
        isFetching: state.calendar.isFetching
    }
}

export default connect(mapStateToProp, Actions)(Calendar);