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

class Files extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.fetchData('files', '_FETCH_FILES')
    }

    clickHandler() {
        this.props.navigator.push({
          component: 'Chat',
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.clickHandler.bind(this)}>
                    <Text style={styles.description}>
                      Files
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const mapStateToProp = (state) => {
    return {
        selected: state.files.selected,
        files: state.files.messages,
        isFetching: state.files.isFetching
    }
}

export default connect(mapStateToProp, Actions)(Files);