import React, { Component } from 'react';
import { Router, Stack, Scene, } from 'react-native-router-flux';

import {
    SplashToOnboarding,
    Authentication,
    Maps

} from './../screens/';

import { TabIcon } from '../components'

class Navigation extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="splashToOnboarding" component={ SplashToOnboarding } hideNavBar={ true }  initial={true}/>
                    <Scene key="authentication" hideNavBar={ true } component={ Authentication } />
                    <Scene
                        key="home"
                        tabs
                        tabBarPosition="bottom"
                        showLabel={ true }
                        activeTintColor="#000"
                        hideTabBar={ false }
                        hideNavBar={ true }
                        labelStyle={ { fontWeight: 'bold', } }
                        tabBarStyle={{ backgroundColor:'#f4e6ff' }}
                    >
                        <Scene key="maps" component={ Maps } title="Explore" hideNavBar={ true } icon={ TabIcon } />
                    </Scene>
                </Stack>
            </Router>
        )
    }
}

export default Navigation;