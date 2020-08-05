import { StyleSheet } from 'react-native'

import theme from '../../theme'

const styles = StyleSheet.create({
    card: {
        alignItems:'center',
        paddingBottom:10,
        marginTop: '50%',
    },
    forgotPasswordText: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginVertical: 20
    },
    loginButton: {
        width: '95%',
        marginTop:10
    }
})
export default styles