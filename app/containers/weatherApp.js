import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import WeatherInfo from '../components/weatherInfo';
import SearchBox from '../components/searchBox';
import styles from '../styles';
import * as weatherActions from '../actions';

const WeatherApp = (props) => {
    const { state, actions } = props;
    const { weatherData } = state;
    return (
      <View style={styles.container}>
        <WeatherInfo weatherData={weatherData} />
        <SearchBox
          onComplete={actions.searchByCity}
        />
        <View style={styles.paddingBelow} />
      </View>
    );
};

WeatherApp.propTypes = {
    state: PropTypes.object, // eslint-disable-line
    actions: PropTypes.object, // eslint-disable-line
};

export default connect(state => ({
    state,
}),
dispatch => ({
    actions: bindActionCreators(weatherActions, dispatch),
}),
)(WeatherApp);
