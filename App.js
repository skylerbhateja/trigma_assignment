import React from 'react';
import {Provider} from 'react-redux';
import AppStore from './src/common/redux/store/AppStore';
import AppNavigation from './src/common/navigation/AppNavigation';
import { StatusBar } from 'react-native';
import { Colors } from './src/common/styles/colors';

const App = () => {
  const store = AppStore();
  return (
    <Provider store={store}>
      <StatusBar translucent backgroundColor={Colors.BACKGROUND} />
      <AppNavigation />
    </Provider>
  );
};

export default App;
