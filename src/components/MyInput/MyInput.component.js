import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import styles from "./MyInput.styles";

const MyInput = props => {

    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const togglePasswordVissibility = () => {
        setIsPasswordShown(!isPasswordShown)
    }

    return (
        <View style={styles.container}>
            <AntDesign name={props.iconName} color={props.color} size={25} />
            <TextInput
                style={styles.input}
                {...props}
                secureTextEntry={isPasswordShown ? false : true}
            />
            {props.makeSecured ? (
                <TouchableOpacity
                    style={styles.secureIconView}
                    onPress={togglePasswordVissibility}
                >
                    {isPasswordShown ?
                        (<Feather name='eye-off' color='#2C3A47' size={25} />)
                        : (<Feather name='eye' color='#d1d8e0' size={25} />)
                    }

                </TouchableOpacity>
            ) : null}

        </View>
    )
}

export default MyInput;