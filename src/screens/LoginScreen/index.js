import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';

import {Line, Logo} from '../../assets';
import {Button, InputField, Space} from '../../components';
import {setLoading, signInAction} from '../../redux/action';
import {useForm} from '../../utils';
import {getData} from '../../utils/storage';

const LoginScreen = ({navigation}) => {
  const [form, setForm] = useForm({
    username: '',
    password: '',
    expiredToken: '9999h',
  });
  const [deviceToken, setDeviceToken] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    getData('DEVICE_TOKEN').then(res => {
      setDeviceToken(res);
    });
  });

  const handleSignin = () => {
    console.log(deviceToken);
    console.log(form);
    dispatch(signInAction(form, deviceToken, navigation));
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.pageContainer}>
        <Logo />
        <View style={styles.textLogoContainer}>
          <Line />
          <Text style={styles.textLogo}>Courier App</Text>
          <Line />
        </View>
      </View>
      <Space height={40} />
      <View>
        <InputField
          label="Username"
          placeholder="Your username"
          value={form.username}
          onChangeText={value => setForm('username', value)}
        />
        <Space height={50} />
        <InputField
          label="Password"
          placeholder="Your password"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
        <Space height={5} />
        <TouchableOpacity>
          <Text style={styles.forgotPass}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Space height={90} />
      <Button labelBtn="Login" onPress={handleSignin} />
      <View style={styles.space} />
      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>Bungadavi Mobile v.2.0</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {paddingHorizontal: 40, flex: 1},
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  textLogoContainer: {
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogo: {
    color: '#EE3072',
    fontFamily: 'Poppins-Medium',
    paddingHorizontal: 15,
    fontSize: 13,
  },
  forgotPass: {
    fontFamily: 'Poppins-Regular',
    color: '#7D8797',
    fontSize: 12,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  space: {flex: 1},
  versionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
    position: 'relative',
  },
  versionText: {fontFamily: 'Poppins-Light', fontSize: 12},
});
