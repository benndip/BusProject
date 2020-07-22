import React, { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

import theme from '../../theme'
import styles from './Login.styles'
import { Card, MyInput, MyAuthButton } from '../../components'
import { View } from 'react-native-animatable';

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
                <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>Forgot Password??</Text>
                </TouchableOpacity>
                <MyAuthButton
                    onPress={login}
                    style={styles.loginButton}
                    buttonName='LOGIN'
                />
            </Card>
        </View>
    )
}

export default Login
