import React from 'react';
import {
    Text,
    TextInput,
    View,
} from 'react-native';
import styles from '../styles';

const WeatherSearch = () =>
    (<View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.message}>Search</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchbox}
          value={''}
        />
      </View>
      <View style={styles.paddingBelow} />
    </View>);

export default WeatherSearch;
