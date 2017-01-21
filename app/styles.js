import { StyleSheet } from 'react-native';

const gray = '#cccccc';
const blue = '#5DBCD2';
const white = '#ffffff';
const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: blue,
    },
    weatherInfo: {
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
        color: white,
    },
    searchbox: {
        textAlign: 'center',
        margin: 10,
        height: 40,
        borderColor: gray,
        borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        backgroundColor: white,
    },
    searchContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    paddingBelow: {
        flex: 1,
    },
});

export default styles;
