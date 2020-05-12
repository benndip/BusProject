import { StyleSheet } from 'react-native'
import theme from '../../theme/index'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    headerView: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-around',
        //backgroundColor: 'pink'
    },
    text: {
        fontSize: theme.FONT_SIZE_MEDIUM,
        color: theme.WHITE_COLOR,

    },
    touch: {
        width: '40%',
        height: 40,
        //backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#0fb9b1'
    },
    belowHeaderView: {
        width: '100%',
        height: 60,
        backgroundColor: theme.SECONDARY_COLOR
    },
    viewForScrollView: {
        flex: 1,
        width: '100%'
    }
})

export default styles