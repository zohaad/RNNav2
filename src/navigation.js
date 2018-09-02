import { Navigation } from 'react-native-navigation';

export const goHome = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'App',
            children: [
                {
                    component: {
                        name: 'Home'
                    }
                }
            ]
        }
    }
});

export const goToAuth = () => Navigation.setRoot({
    root: {
        // special thing
        bottomTabs: {
            id: 'BottomTabsId',
            children: [
                {
                    component: {
                        name: 'SignIn',
                        options: {
                            bottomTab: {
                                fontSize: 12,
                                text: 'Sign In',
                                icon: require('./signIn.png')
                            }
                        }
                    }
                },
                {
                    component: {
                        name: 'SignUp',
                        options: {
                            bottomTab: {
                                fontSize: 12,
                                text: 'Sign Up',
                                icon: require('./signUp.png')
                            }
                        }
                    }
                }
            ]
        }
    }
});