import theme from '../../theme';

const styles = {
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: theme.PRIMARY_COLOR,
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 5,
        shadowRadius: 2,
        elevation: 5,
    },
    saveButton: {
        fontSize: theme.FONT_SIZE_NORMAL,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        color: theme.SECOND_WHITE_COLOR,
    },
    bodyContainer: {
        backgroundColor: theme.SECOND_WHITE_COLOR,
    },
    ActivityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.SECOND_WHITE_COLOR,
    },
    image: {
        width: 175,
        height: 185
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#ecf2f3'
    },
    iconContainer: {
        alignSelf: 'flex-end',
        marginRight: -40,
        marginLeft: 20,
        marginBottom: 20
    },
    userInformation: {
        marginHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: theme.SECOND_WHITE_COLOR,
    },
    lable: {
        fontSize: theme.FONT_SIZE_NORMAL,
        // color: theme.LIGHT_PRIMARY_COLOR,
        color: '#383a45'
        
    },
    informationWrapper: {
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc90',
        paddingVertical: 5,
        marginBottom: 5,
        color: theme.LIGHT_COLOR,
        fontSize: 18,
    },
    informationWrapperText: {
        marginTop: 10,
        color: theme.LIGHT_COLOR,
        // fontWeight: '700',
        fontSize: theme.FONT_SIZE_LARGE,
    },
    location: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc90',
        paddingVertical: 10
    },
    locationText: {
        fontSize: theme.FONT_SIZE_MEDIUM,
        color: theme.LIGHT_COLOR
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        flexDirection: 'row',
        backgroundColor: '#ecf2f3',
        paddingVertical: 5,
    },
    modalIcon: {
        alignItems: 'center',
        width: '33.3333%',
        borderLeftColor: theme.LIGHT_COLOR,
    },
    modalIconText: {
        color: theme.LIGHT_COLOR,
        fontSize: theme.FONT_SIZE_NORMAL,
    }

}

export default styles;