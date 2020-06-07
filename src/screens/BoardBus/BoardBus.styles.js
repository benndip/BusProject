import { StyleSheet } from 'react-native';
import theme from '../../theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f2f6',
        alignItems: 'center',
        padding: 5
    },
    dateAndTimeView:{
        margin:5,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%' 
    },
    viewForImage: {
        borderWidth:1, 
        alignItems: 'center', 
        width: 50, 
        justifyContent: 'center'
    },
    viewForText: {
        padding:5,
        borderWidth: 1
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.PRIMARY_COLOR
    },
    bulbTextAndSwitchView: {
        width: '100%',
        height:150,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    viewForVerticalScroll: {
        flex: 1,
        width: '100%',
       // borderWidth: 1,
        padding: 3
    },
    scroll: {
        
    },
    townAndRegionsView: {
      
    },
    townTouch: {
        width: 100,
        height: 95,
        borderWidth: 1,
        alignItems: 'center',
        paddingVertical: 40,
        marginHorizontal:6,
    }
});

export default styles