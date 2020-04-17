import React, { Component } from 'react';
import { Router, Stack, Scene, } from 'react-native-router-flux';

import {
    SplashToOnboarding,
    Authentication

} from './../screens/';

class Navigation extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="splashToOnboarding" component={ SplashToOnboarding } hideNavBar={ true }  initial={true}/>
                    <Scene key="authentication" hideNavBar={ true } component={ Authentication } />
                </Stack>
            </Router>
        )
    }
}

export default Navigation;