import { StyleSheet } from 'react-native';
import theme from '../../theme'

const styles = StyleSheet.create({
    container: {
        width: 50,
        height:90,
        elevation:9,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    touch: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: theme.WHITE_COLOR,
        fontWeight: theme.FONT_WEIGHT_HEAVY
    }
});

export default styles