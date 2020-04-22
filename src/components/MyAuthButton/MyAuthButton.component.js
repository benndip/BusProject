import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './MyAuthButton.styles'

const MyAuthButton = props => {
  return (
    <TouchableOpacity
      {...props}
      style={{ ...styles.container, ...props.style }}
    >
      <Text style={styles.text}>{props.buttonName}</Text>
    </TouchableOpacity>
  )
}

export default MyAuthButton
