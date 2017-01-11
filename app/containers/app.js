import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

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
});

const App = () =>
    (<View style={styles.container}>
      <Text style={styles.message}>Hello World</Text>
    </View>);

export default App;
