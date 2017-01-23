import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import _ from 'lodash';
import styles from '../styles';
import utils from '../utils';

const WeatherInfo = (props) => {
    const { weatherData } = props;
    const { name, main, weather } = weatherData;
    return (
      <View style={styles.textContainer}>
        { _.isEmpty(weatherData) ?
          <Progress.Circle size={30} indeterminate /> :
          <View>
            <Text style={styles.weatherInfo}>{`${name}`}</Text>
            <Text style={styles.weatherInfo}>{`${utils.toCelsius(main.temp)} °C`}</Text>
            <Text style={styles.weatherInfo}>{`${weather[0].description}`}</Text>
          </View>}
      </View>
    );
};

WeatherInfo.propTypes = {
    weatherData: PropTypes.object.isRequired,
};

export default WeatherInfo;
