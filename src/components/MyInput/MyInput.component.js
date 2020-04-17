import React from 'react';
import { View, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
import styles from "./MyInput.styles";

const MyInput = props => {
    return (
        <View style={styles.container}>
            <Icon name={props.iconName} color={props.color} />
            <TextInput
                style={styles.input}
                {...props}
            />
        </View>
    )
}

export default MyInput;