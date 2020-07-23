import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import styles from "./MyInput.styles";

const MyInput = ({ iconName, makeSecured, ...props }) => {

    const [isPasswordNotShown, setIsPasswordNotShown] = useState(true);

    const togglePasswordVissibility = () => {
        setIsPasswordNotShown(!isPasswordNotShown)
    }

    return (
        <View style={styles.container}>
            <AntDesign name={iconName} color='indigo' size={26} />
            <TextInput
                style={styles.input}
                {...props}
                secureTextEntry={isPasswordNotShown ? true : false}
                placeholderTextColor='indigo'
            />
            {makeSecured ? (
                <TouchableOpacity
                    style={styles.secureIconView}
                    onPress={togglePasswordVissibility}
                >
                    {isPasswordNotShown ?
                        (<Feather name='eye-off' color='indigo' size={26} />)
                        : (<Feather name='eye' color='indigo' size={26} />)
                    }

                </TouchableOpacity>
            ) : null}

        </View>
    )
}

export default MyInput;