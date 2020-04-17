import React from 'react'
import { View, ScrollView, Text } from 'react-native'

import styles from './Login.styles'
import { Card, MyInput } from '../../components/'
 
const Login = () => {
    return (
        <Card style={styles.card}>
            <ScrollView>
                <View style={styles.inputsView}>
                    <MyInput />
                    <MyInput />

                </View>
            </ScrollView>
        </Card>
    )
}

export default Login
