import { StyleSheet } from 'react-native'

import theme from '../../theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a60059'
    },
    topView: {
        width: '100%',
        height: 230,
        backgroundColor: '#1B1464',
        paddingTop: 20,
        paddingLeft: 24,
    },
    iconAndTextView: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center',
    },
    appNameText: {
        color: theme.WHITE_COLOR,
        fontSize: theme.FONT_SIZE_SMALL,
        fontWeight: theme.FONT_WEIGHT_HEAVY,
        marginLeft: '30%'
    },
    selectText: {
        color: theme.WHITE_COLOR,
        fontSize: 25,
        fontWeight: theme.FONT_WEIGHT_HEAVY,
        marginTop:20

    },
    scroll: {
        paddingTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingHorizontal:0
         
    },
})

export default styles