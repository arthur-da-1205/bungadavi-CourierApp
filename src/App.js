import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {Provider, useSelector} from 'react-redux';
import FlashMessage from 'react-native-flash-message';

import Router from './router';
import {LoadingAnimation} from './components';
import store from './redux/store';

const MainApp = () => {
  const {isLoading} = useSelector(state => state.globalReducer);

  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
      {isLoading && <LoadingAnimation />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
