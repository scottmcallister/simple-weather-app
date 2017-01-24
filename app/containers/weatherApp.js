import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import WeatherInfo from '../components/weatherInfo';
import SearchBox from '../components/searchBox';
import styles from '../styles';
import * as weatherActions from '../actions';

export class WeatherApp extends Component {
    static propTypes = {
        state: PropTypes.object, // eslint-disable-line
        actions: PropTypes.object, // eslint-disable-line
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition( // eslint-disable-line
            (position) => {
                const lat = position.coords.latitude.toString();
                const lon = position.coords.longitude.toString();
                this.props.actions.searchByCoordinates(lat, lon);
            },
            () => {
                const errorMessage = 'Could not fetch weather for your location';
                this.props.actions.setErrorMessage(errorMessage);
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
    }

    render() {
        const { state, actions } = this.props;
        const { weatherData, errorMessage, isLoading } = state;
        return (
          <View style={styles.container}>
            <SearchBox onComplete={actions.searchByCity} />
            <WeatherInfo
              weatherData={weatherData}
              errorMessage={errorMessage}
              isLoading={isLoading}
            />
            <View style={styles.paddingBelow} />
          </View>
        );
    }
}

export default connect(state => ({
    state,
}),
dispatch => ({
    actions: bindActionCreators(weatherActions, dispatch),
}),
)(WeatherApp);
