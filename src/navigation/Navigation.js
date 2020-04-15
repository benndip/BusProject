import React, { Component } from 'react';
import { Router, Stack, Scene, } from 'react-native-router-flux';

import {
    SplashToOnboarding
} from './../screens/';

class Navigation extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="splash" component={ SplashToOnboarding } hideNavBar={ true }  initial={true}/>
                    
                </Stack>
            </Router>
        )
    }
}

export default Navigation;