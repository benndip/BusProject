import { StyleSheet } from 'react-native'

import theme from '../../theme'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
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
        borderRadius: 4
    },
    signupButton: {
        width: '95%'
    },
    orText: {
        marginVertical: 10,
    },
    bottomView: {
        width: '100%',
        alignItems: 'center',
    },
    fbIconAndTextView: {
        flexDirection: 'row',
        backgroundColor: '#3867d6',
        alignItems: 'center',
        marginBottom: 20,
        width: '95%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    facebookText: {
        color: '#ffffff'
    },
    gotAnAccountView: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        justifyContent: 'space-between',
        width: '70%'
    },
    lineText: {
        borderColor: '#4b4b4b',
        borderWidth: 0.4,
        borderColor:'black',
        width: '40%',
        marginHorizontal: 10
    },
    lineAndOrView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center'
    }
})
export default styles