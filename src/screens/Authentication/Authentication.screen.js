import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StatusBar, ScrollView } from 'react-native'

import theme from '../../theme'
import styles from './Authentication.styles'
import { Header } from '../../components'
import { Login, Signup } from '../index'

const Authentication = () => {

    const [showLogin, setShowLogin] = useState(false)
    const [showSignup, setShowSignup] = useState(true)

    const changeLogin = () => {
        setShowLogin(true)
        setShowSignup(false)
    }

    const changeSignup = () => {
        setShowSignup(true)
        setShowLogin(false)
    }

    return (
        <View style={styles.container}>
            <StatusBar translucent  backgroundColor='rgb(45, 0, 77)' />
            <Header
                title="Account"
            >
                <View style={styles.headerView}>
                    <TouchableOpacity
                        onPress={changeSignup}
                        style={[styles.touch, { borderBottomWidth: showSignup ? 5 : 0 }]}
                    >
                        <Text style={styles.text}>Signup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={changeLogin}
                        style={[styles.touch, { borderBottomWidth: showLogin ? 5 : 0 }]}
                    >
                        <Text style={styles.text}>Login</Text>
                    </TouchableOpacity>
                </View>
            </Header>
            <View style={styles.belowHeaderView} />
            <View style={styles.viewForScrollView}>
                <ScrollView>
                    {showLogin ? <Login /> : <Signup />}
                </ScrollView>
            </View>
        </View>
    )
}

export default Authentication
