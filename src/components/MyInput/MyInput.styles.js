import { StyleSheet } from 'react-native';

import theme from '../../theme'

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 55,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor:  theme.LIGHT_bLUE,

    },
    input: {
        width: '83%',
        height: '100%',
        paddingHorizontal: 10,
    },
    secureIconView: {
        position: 'absolute',
        right:10
    }
});

export default styles