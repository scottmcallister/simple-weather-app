import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

const gray = '#cccccc';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    searchbox: {
        textAlign: 'center',
        margin: 10,
        flex: 1,
        height: 40,
        borderColor: gray,
        borderWidth: 1,
    },
});

const WeatherSearch = () =>
    (<View style={styles.container}>
      <Text style={styles.message}>Search</Text>
      <TextInput
        style={styles.searchbox}
        value={''}
      />
    </View>);

export default WeatherSearch;
