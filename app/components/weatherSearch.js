import React from 'react';
import {
    Text,
    TextInput,
    View,
} from 'react-native';
import styles from '../styles';

const WeatherSearch = () =>
    (<View style={styles.container}>
      <Text style={styles.message}>Search</Text>
      <TextInput
        style={styles.searchbox}
        value={''}
      />
    </View>);

export default WeatherSearch;
