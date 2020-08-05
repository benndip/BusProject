import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

import theme from '../../theme'
import styles from './Login.styles'
import { Card, MyInput, MyAuthButton } from '../../components'

const Login = () => {

    const login = () => {
        Actions.push('selectionBoard')
    }

    return (
        <View style={{ paddingHorizontal: 3, width: '100%' }}>
            <Card style={styles.card}>
                <MyInput
                    iconName='mail'
                    placeholder='Email'
                />
                <MyInput
                    iconName='key'
                    placeholder='password'
                    makeSecured
                />
                <MyAuthButton
                    onPress={login}
                    style={styles.loginButton}
                    buttonName='LOGIN'
                />
                <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>Forgot Password??</Text>
                </TouchableOpacity>
            </Card>
        </View>
    )
}

export default Login
