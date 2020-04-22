import { StyleSheet } from 'react-native';

import theme from '../../theme'

const styles = StyleSheet.create({
    container: {
        width: '92%',
        height: 55,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor:  theme.LIGHT_bLUE,
        borderRadius: 5

    },
    input: {
        width: '100%',
        height: '100%',
        //borderWidth: 1,
        paddingHorizontal: 10,
    },
    secureIconView: {
        position: 'absolute',
        right:10
    }
});

export default styles