import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import theme from '../../theme'
import styles from './Login.styles'
import { Card, MyInput, MyAuthButton } from '../../components'

const Login = () => {

    const [termAndCondition, setTermAndCondition] = useState(false);
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const changeTermAndCondition = () => {
        setTermAndCondition(!termAndCondition)
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
            <MyAuthButton
                buttonName='LOGIN'
            />
        </Card>
    )
}

export default Login
