import React from 'react'
import { View, Text } from 'react-native'

import styles from './Header.styles'

const Header = props => {
    return (
        <View style={{ ...styles.header, ...props.style }}>
           <Text style={styles.headerTitle}>{props.title}</Text>
           {props.children}
        </View>
    )
}
export default Header