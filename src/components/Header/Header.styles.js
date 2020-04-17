import { StyleSheet } from 'react-native'
import theme from '../../theme/index'

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 100,
        paddingTop: 30,
        backgroundColor: theme.PRIMARY_COLOR ,
        alignItems: 'center',
    },
    headerTitle: {
        color: theme.WHITE_COLOR,
        fontSize: theme.FONT_SIZE_LARGE,
        fontWeight: theme.FONT_WEIGHT_HEAVY
    }
})

export default styles