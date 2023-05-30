import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 28,
        padding: 26,
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
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 50,
        backgroundColor: '#E67B02',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 20
    },
    header: {
        flex: 0,
        alignSelf: "center",
        padding: 10,

        marginTop: 20,
        marginBottom: 20,

        backgroundColor: "rgba(255, 255, 255, 0.7)",
        borderRadius: 10,
        
    },
    headerText: {
        fontSize: 34,
        fontWeight: "bold",
        textAlign: "center",
        alignContent: "center",
        justifyContent: "center",
        color: '#E67B02',
    },
});

export default styles;