import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Space} from '../../components';
import {Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
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
