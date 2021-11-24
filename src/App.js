import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {Provider, useSelector} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import PushNotification from 'react-native-push-notification';
import Firebase from '@react-native-firebase/app';

import NotifService from './NotifService';
import Router from './router';
import {LoadingAnimation} from './components';
import store from './redux/store';
import {Alert} from 'react-native';

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
  const [registerToken, setRegisterToken] = useState('');
  const [fcmRegistered, setFcmRegistered] = useState(false);
  const onRegister = token => {
    setRegisterToken(token.token);
    setFcmRegistered(true);
  };
  const onNotif = notif => {
    Alert.alert(notif.title, notif.message);
  };
  const notif = new NotifService(onRegister, onNotif);
  const handlePerm = perms => {
    Alert.alert('Permissions', JSON.stringify(perms));
  };
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
