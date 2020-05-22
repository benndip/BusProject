import React from 'react'
import { View, Text } from 'react-native'

import styles from './Header.styles'

const Header = ({ title, children, ...props }) => {
    return (
        <View style={{ ...styles.header, ...props.style }}>
           <Text style={styles.headerTitle}>{title}</Text>
           {children}
        </View>
    )
}
export default Header