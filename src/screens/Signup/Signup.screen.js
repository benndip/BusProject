import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

import theme from '../../theme'
import styles from './Signup.styles'
import { Card, MyInput, MyAuthButton } from '../../components'

const Signup = () => {

    const [termAndCondition, setTermAndCondition] = useState(false);

    const changeTermAndCondition = () => {
        setTermAndCondition(!termAndCondition)
    }

    return (
        <Card style={styles.container}>
            <MyInput
                iconName='user'
                placeholder='Name'
            />
            <MyInput
                iconName='mail'
                placeholder='Email'
            />
            <MyInput
                iconName='phone'
                placeholder='Phone number'
            />
            <MyInput
                iconName='lock1'
                placeholder='Password'
                makeSecured
            />
            <MyInput
                iconName='lock1'
                placeholder='Confirm password'
                makeSecured
            />
            <View style={styles.IconAndConditionView}>
                <TouchableOpacity
                    onPress={changeTermAndCondition}
                    style={styles.iconTouch}
                >
                    <Icon name="check" color={termAndCondition ? theme.SECONDARY_COLOR : "#d1d8e0"} size={20} />
                </TouchableOpacity>
                <Text>I accept terms and conditions</Text>
            </View>
            <MyAuthButton
                style={styles.signupButton}
                buttonName='SIGNUP'
            />
            <View style={styles.lineAndOrView}>
                <View style = {styles.lineText} />
                <Text style={styles.orText}>OR</Text>
                <View style = {styles.lineText} />
            </View>
            <View style={styles.bottomView}>
                <TouchableOpacity style={styles.fbIconAndTextView}>
                    <EvilIcons name='sc-facebook' color='#ffffff' size={30} />
                    <Text style={styles.facebookText}>SIGNUP WITH FACEBOOK</Text>
                </TouchableOpacity>
            </View>
        </Card>
    )
}

export default Signup
