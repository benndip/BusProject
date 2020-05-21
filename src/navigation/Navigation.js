import React, { Component } from 'react';
import { Router, Stack, Scene, } from 'react-native-router-flux';

import {
    SplashToOnboarding,
    Authentication,
    Maps,
    SelectionBoard

} from './../screens/';

import { TabIcon } from '../components'
import TabNavigation from './TabNavigation'
import theme from '../theme'

class Navigation extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="splashToOnboarding" component={ SplashToOnboarding } hideNavBar  />
                    <Scene key="authentication" hideNavBar component={ Authentication } />
                    <Scene key="tabNavigation" hideNavBar component={TabNavigation} />
                    <Scene key="selectionBoard" hideNavBar component={SelectionBoard} />
                    <Scene
                        key="home"
                        tabs
                        tabBarPosition="bottom"
                        showLabel={ true }
                        activeTintColor={theme.DARK_COLOR}
                        hideTabBar={ false }
                        hideNavBar={ true }
                        labelStyle={ theme.FONT_WEIGHT_HEAVY }
                        tabBarStyle={{ backgroundColor:theme.TRANSPARENT_PRIMARY }}
                    >
                        <Scene key="maps" component={ Maps } title="Explore" hideNavBar={ true } icon={ TabIcon } initial={true} />
                    </Scene>
                </Stack>
            </Router>
        )
    }
}

export default Navigation;