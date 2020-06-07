import React, { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { Card } from '../../components'
import styles from './switch.styles'

const Switch = ({ onText, offText, switchOnPress, switchOffPress, ...props }) => {

  return (
    <Card style={styles.container}>
      <TouchableOpacity
        style={{...styles.touch, ...props.onStyle}}
        onPress={switchOnPress}
      >
        <Text style={styles.text}>{onText}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{...styles.touch, ...props.offStyle}} 
        onPress={switchOffPress}
      >
        <Text style={styles.text}>{offText}</Text>
      </TouchableOpacity>
    </Card>
  )
}

export default Switch
