import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StatusBar, ScrollView } from 'react-native'

import theme from '../../theme'
import styles from './Authentication.styles'
import { Header, Card } from '../../components'
import { Login, Signup } from '../index'

const Authentication = () => {

    const [showLogin, setShowLogin] = useState(true)
    const [showSignup, setShowSignup] = useState(false)

    const changeLogin = () =>{
        setShowLogin(true)
        setShowSignup(false)
    }

    const changeSignup = () =>{
        setShowSignup(true)
        setShowLogin(false)
    }

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={theme.SECONDARY_COLOR}/>
            <Header
                title="Account"
            >
                <View style={styles.headerView}>
                    <TouchableOpacity
                        onPress={changeLogin}
                        style={[styles.touch,{ borderBottomWidth: showLogin ? 5 : 0 }]}
                    >
                        <Text style={styles.text}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={changeSignup}
                        style={[styles.touch,{ borderBottomWidth: showSignup ? 5 : 0 }]}
                    >
                        <Text style={styles.text}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </Header>
            <View style={styles.belowHeaderView} />
            { showLogin ? <Login /> : <Signup /> }
        </View>
    )
}

export default Authentication
