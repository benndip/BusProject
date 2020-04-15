import React from 'react';
import { TextInput } from "react-native";

import styles from "./MyInput.styles";

const MyInput = props => {
    return(
       <TextInput
            style={{...styles.container,...props.style}}
            { ...props }
       />
    )
}

export default MyInput;