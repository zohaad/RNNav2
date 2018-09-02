import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Button,
    AsyncStorage
} from 'react-native';

import { goHome } from "./navigation";
import { USER_KEY } from "./config";

export default class SignIn extends Component {

    state = {
        username: '', password: ''
    };

    onTextChange = (key, val) => {
        this.setState({ [key]: val });
    };

    SignIn = async () => {
        const { username, password } = this.state;
        try {
            // login with provider
            const user = await AsyncStorage.setItem(USER_KEY, username);
            console.log('user successfully signed in! ', user);
            goHome();
        } catch (e) {
            console.log('error: ', e);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='Username'
                    placeholderTextColor='white'
                    autoCapitalize="none"
                    autoCorrect={false}
                    onTextChange={val => this.onTextChange('username', val)}

                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor='white'
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onTextChange={val => this.onTextChange('password', val)}

                />
                <Button
                    title='Sign In'
                    onPress={this.SignIn}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        width: 350,
        fontSize: 18,
        fontWeight: '500',
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        color: 'white',
        padding: 8,
        borderRadius: 14
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});