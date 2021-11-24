import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Space} from '../../components';
import {Logo} from '../../assets';
import {getData} from '../../utils/storage';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('TOKEN').then(res => {
        if (res) {
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        } else {
          navigation.replace('LoginScreen');
        }
      });
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Space height={24} />
      <Logo />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF',
    flex: 1,
  },
});
