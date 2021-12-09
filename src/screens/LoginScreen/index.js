import axios from 'axios';
import React, {useEffect} from 'react';
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
import {toastMessage, useForm} from '../../utils';

const LoginScreen = ({navigation}) => {
  const [form, setForm] = useForm({
    username: '',
    password: '',
    expiredToken: '24h',
  });

  const dispatch = useDispatch();

  useEffect(() => {});

  const handleSignin = () => {
    console.log(form);
    dispatch(signInAction(form, navigation));
    // dispatch(setLoading(true));
    // axios
    //   .post('http://api.bungadavi.brits-team.com:8080/api/v1/kurir/login', form)
    //   .then(res => {
    //     dispatch(setLoading(false));

    //     // const token = res.data.token;
    //     // const profile = {
    //     //   id: res.data.data[0].id,
    //     //   username: res.data.data[0].username,
    //     //   email: res.data.data[0].email_courier,
    //     //   mobilePhone: res.data.data[0].phone_courier,
    //     //   point: res.data.data[0].point_courier,
    //     //   photo: res.data.data[0].photo_courier,
    //     // };

    //     // dispatch(setLoading(false));
    //     // storeData('TOKEN', {value: token});
    //     // storeData('USER_PROFILE', profile);

    //     navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    //   })
    //   .catch(err => {
    //     dispatch(setLoading(false));
    //     console.log(err);
    //     toastMessage('Invalid email or password', 'danger');
    //   });
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
