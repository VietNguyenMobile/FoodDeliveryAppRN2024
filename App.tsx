import React from 'react';
// import 'react-native-reanimated';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/stores';
import Navigator from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
