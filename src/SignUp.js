import React, { Component } from 'react';
import {
    View,
    Button,
    TextInput,
    StyleSheet
} from 'react-native';

export default class SignUp extends Component {
    state = {
        username: '', password: '', email: '', phone_number: ''
    };

    onChangeText = (key, val) => {
        // [] because string entry
        this.setState({ [key]: val })
    };

    signUp = async () => {
        const { username, password, email, phone_numbers } = this.state;
        try {
            // logic for sign up
            console.log('user successfully signed up! ', success);
        } catch (e) {
            console.log('error signing up: ', e);
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
                    onChangeText={val => this.onChangeText('username', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor='white'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    onChangeText={val => this.onChangeText('password', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor='white'
                    autoCapitalize="none"
                    onChangeText={val => this.onChangeText('email', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Phone Number'
                    placeholderTextColor='white'
                    autoCapitalize="none"
                    onChangeText={val => this.onChangeText('phone_number', val)}
                />
                <Button title='Sign Up' onPress={this.signUp}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});