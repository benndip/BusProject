import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { Actions } from 'react-native-router-flux'

import theme from '../../theme'
import styles from './Login.styles'
import { Card, MyInput, MyAuthButton } from '../../components'

const Login = () => {

    const login = () => {
        Actions.push('selectionBoard')
    }

    return (
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
    )
}

export default Login
