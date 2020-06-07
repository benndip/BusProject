import React, { Component } from 'react';
import { Router, Stack, Scene, } from 'react-native-router-flux';

import {
    SplashToOnboarding,
    Authentication,
    SelectionBoard,
    BoardBus

} from './../screens/';

import TabNavigation from './TabNavigation'

class Navigation extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="splashToOnboarding" component={ SplashToOnboarding } hideNavBar  />
                    <Scene key="authentication" hideNavBar component={ Authentication } />
                    <Scene key="tabNavigation" hideNavBar component={TabNavigation} />
                    <Scene key="selectionBoard" hideNavBar component={SelectionBoard} />
                    <Scene initial key="boardBus" component={BoardBus} />
                </Stack>
            </Router>
        )
    }
}

export default Navigation;