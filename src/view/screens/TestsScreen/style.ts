import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        alignContent: "center",
        justifyContent: "center",
    },
    subtitle: {
        fontSize: 15,
        textAlign: "center",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        color: "grey",
    },
    footer: {
        bottom: 10,
        position: "absolute",
        alignSelf: "center",
        width: '50%',
        height: 50,
        backgroundColor: '#E67B02',
        borderRadius: 20,
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: "black",
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    box: {
        width: 21,
        height: 21,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        marginVertical: 10,
        marginHorizontal: 10,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxChecked: {
        width: 21,
        height: 21,
        backgroundColor: '#E67B02',
        borderRadius: 5,
        borderWidth: 1,
        marginVertical: 10,
        marginHorizontal: 10,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxGroup: {
        flexDirection: 'row',
        justifyContent: "space-around"
    }
});

export default styles;