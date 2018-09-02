import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';

import { USER_KEY } from "./config";
import {goHome, goToAuth} from "./navigation";

export default class Initializing extends Component {
    async componentDidMount() {
        try {
            const user = await AsyncStorage.getItem(USER_KEY);
            console.log('user: ', user);
            if (user) {
                goHome();
            } else {
                goToAuth();
            }
        } catch (e) {
            console.log('error: ', e);
            goToAuth()
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Loading</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 28
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
