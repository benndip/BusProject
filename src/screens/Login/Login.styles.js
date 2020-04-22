import { StyleSheet } from 'react-native'

import theme from '../../theme'

const styles = StyleSheet.create({
    card: {
        width: '100%',
        alignItems:'center',
        //backgroundColor: 'red'
    },
    IconAndConditionView: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        justifyContent: 'space-around'
    },
    iconTouch: {
        width: 30,
        height: 30,
        backgroundColor: theme.LIGHT_bLUE,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:4
    }
})
export default styles