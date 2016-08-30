import React, { Component } from 'react'
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

class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.fetchData('comunities', '_FETCH_COMMUNITIES')
    }

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

const mapStateToProp = (state) => {
    return {
        selected: state.home.selected,
        communities: state.home.messages,
        boards: state.home.boards,
        posts: state.home.posts,
        isFetching: state.home.isFetching
    }
}

export default connect(mapStateToProp, Actions)(Home);
