import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

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
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Logo />
          <View style={styles.textLogoContainer}>
            <Line />
            <Text style={styles.textLogo}>Courier App</Text>
            <Line />
          </View>
        </View>
        <Space height={50} />
        <View style={styles.inputContainer}>
          <InputField
            iconName="account-outline"
            placeholder="Your username"
            value={form.username}
            onChangeText={value => setForm('username', value)}
          />
          <Space height={50} />
          <InputField
            iconName="lock-outline"
            placeholder="Your password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Space height={10} />
          <TouchableOpacity style={styles.forgotContainer}>
            <Text style={styles.forgotPass}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <Space height={90} />
        <View style={styles.btnContainer}>
          <Button labelBtn="Login" onPress={handleSignin} />
        </View>
        <View style={styles.space} />
      </KeyboardAwareScrollView>
      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>Bungadavi Mobile v.2.0</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  header: {
    flex: 1,
    alignItems: 'center',
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
  inputContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  forgotContainer: {flex: 0.5},
  forgotPass: {
    fontFamily: 'Poppins-Regular',
    color: '#7D8797',
    fontSize: 12,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  btnContainer: {flex: 1},
  space: {flex: 1},
  versionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    position: 'relative',
  },
  versionText: {fontFamily: 'Poppins-Light', fontSize: 12},
});
