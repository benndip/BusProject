import React, { Component } from 'react';
import { Router, Stack, Scene, } from 'react-native-router-flux';

import {
    SplashToOnboarding,
    Authentication,
    SelectionBoard,
    BoardBus,
    Login,
    FinallyBoard
} from './../screens/';

import TabNavigation from './TabNavigation'

class Navigation extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene initial key="splashToOnboarding" component={ SplashToOnboarding } hideNavBar  />
                    <Scene key="authentication" hideNavBar component={ Authentication } />
                    <Scene key="tabNavigation" hideNavBar component={TabNavigation} />
                    <Scene key="selectionBoard" hideNavBar component={SelectionBoard} direction="vertical" />
                    <Scene key="boardBus" hideNavBar component={BoardBus} />
                    <Scene key="login" hideNavBar component={Login} />
                    <Scene key="finallyBoard" hideNavBar component={FinallyBoard} />
                </Stack>
            </Router>
        )
    }
}

export default Navigation;
