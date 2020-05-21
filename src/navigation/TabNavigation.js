import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import theme from '../theme'
import { Entertainment, JourneyRecords, News, Maps } from '../screens'
const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Entertainment"
            tabBarOptions={{
                activeTintColor: theme.WHITE_COLOR,
                labelStyle: { fontSize: 13, fontWeight: theme.FONT_WEIGHT_HEAVY, },
                style: { backgroundColor: 'rgb(59, 0, 102)', marginTop: 23, height: 100, paddingTop:50 , },
                indicatorStyle: { backgroundColor: '#fff', }
            }}
        >
            <Tab.Screen
                name="Entertainment"
                component={Entertainment}
                options={{ tabBarLabel: 'Entertain' }}
            />
            <Tab.Screen
                name="JourneyRecords"
                component={JourneyRecords}
                options={{ tabBarLabel: 'Records' }}
            />
            <Tab.Screen
                name="News"
                component={News}
                options={{ tabBarLabel: 'News' }}
            />
            <Tab.Screen
                name="Maps"
                component={Maps}
                options={{ tabBarLabel: 'Location' }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigation