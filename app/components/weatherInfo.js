import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import _ from 'lodash';
import styles from '../styles';
import utils from '../utils';

const renderContent = weatherData =>
    (
      <View>
        { _.isEmpty(weatherData) ?
          <Text style={styles.weatherInfo}>{'Search for a location'}</Text>
          :
          <View>
            <Text style={styles.weatherInfo}>{`${weatherData.name}`}</Text>
            <Text style={styles.weatherInfo}>{`${utils.toCelsius(weatherData.main.temp)} °C`}</Text>
            <Text style={styles.weatherInfo}>{`${weatherData.weather[0].description}`}</Text>
          </View>
        }
      </View>
    );

const renderError = errorMessage =>
    (
      <View style={styles.errorContainer}>
        <Text style={styles.weatherInfo}>{errorMessage}</Text>
      </View>
    );

const WeatherInfo = (props) => {
    const { weatherData, errorMessage, isLoading } = props;
    const stuff = _.isEmpty(errorMessage) ? renderContent(weatherData) : renderError(errorMessage);
    return (
      <View style={styles.textContainer}>
        { isLoading ?
          <Progress.Circle size={30} indeterminate /> :
          stuff}
      </View>
    );
};

WeatherInfo.propTypes = {
    weatherData: PropTypes.object.isRequired,
    errorMessage: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default WeatherInfo;
