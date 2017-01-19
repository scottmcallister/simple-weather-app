import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import WeatherSearch from '../components/weatherSearch';
import * as weatherActions from '../actions';

const WeatherApp = (props) => {
    const { state, actions } = props;
    return (
      <WeatherSearch
        city={state.city}
        onComplete={actions.updateSearchTerm}
      />
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
