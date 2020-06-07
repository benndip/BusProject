import { StyleSheet } from 'react-native'
import theme from '../../theme/index'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f2f6'
    },
    headerView: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text: {
        fontSize: theme.FONT_SIZE_MEDIUM,
        color: theme.WHITE_COLOR,

    },
    touch: {
        width: '40%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#0fb9b1'
    },
    belowHeaderView: {
        width: '100%',
        height: 0,
        backgroundColor: theme.SECONDARY_COLOR
    },
    viewForScrollView: {
        flex: 1,
        width: '100%'
    },
    scroll: {
        width: '100%',
        alignItems: 'center',
        padding: 9
    }
})

export default styles