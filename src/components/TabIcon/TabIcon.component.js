import React from 'react';
import { View } from 'react-native'

import Icon  from 'react-native-vector-icons/Feather';
import styles from './TabIcon.styles';
import theme from '../../theme'

const TabIcon = ({title, focused, selected}) => {

    let iconName = "";

    if (title == "Explore") {
        iconName = "map-pin";
    }

    if ( title == "Store" ) {
        iconName = "shopping-bag"
    }

    if ( title == "News" ) {
        iconName = "book-open"
    } 

    if ( title == "Entertainment" ) {
        iconName = "grid"
    } 

    return (
        <View style={[styles.mainView, { borderTopWidth:3, borderColor: focused? theme.SECONDARY_COLOR :'transparent'}]}>
        
        <Icon
            size={focused?25:17}
            name={iconName}
            style={{ color: focused ? styles.focusedColor : '#003333' }}
       />
        </View>
    )
}

export default TabIcon;