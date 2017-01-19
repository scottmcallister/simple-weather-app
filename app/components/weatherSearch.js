import React, { PropTypes } from 'react';
import {
    Text,
    TextInput,
    View,
} from 'react-native';
import styles from '../styles';

const WeatherSearch = (props) => {
    const { onComplete } = props;
    return (<View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.message}>Search</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchbox}
          defaultValue={''}
          placeholder={'Enter a City'}
          onSubmitEditing={(event) => {
              onComplete(event.nativeEvent.text);
              this.value = '';
          }}
        />
      </View>
      <View style={styles.paddingBelow} />
    </View>);
};

WeatherSearch.propTypes = {
    onComplete: PropTypes.func.isRequired,
};

export default WeatherSearch;
