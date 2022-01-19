import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {IcProfileOff, profileImage} from '../../assets';
import {Button, Space} from '../../components';
import {getData} from '../../utils/storage';

const ProfileScreen = ({navigation}) => {
  const [profile, setProfile] = useState('');
  const [photo, setPhoto] = useState('');

  const handleSginOut = () => {
    AsyncStorage.removeItem('TOKEN').then(() => {
      navigation.reset({index: 0, routes: [{name: 'LoginScreen'}]});
    });
  };

  useEffect(() => {
    getData('USER_PROFILE').then(res => {
      setProfile(res);
      setPhoto({uri: res.photo});
    });
  }, []);
  // console.log(photo);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.pictContainer}>
        {photo ? <Image source={{photo}} /> : <Image source={profileImage} />}
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.couirerText}>Courier</Text>
      </View>
      <Space height={50} />
      <View style={styles.dataContainer}>
        <View style={styles.email}>
          <IcProfileOff />
          <Space width={20} />
          <Text style={styles.emailText}>{profile.email}</Text>
        </View>
        <Space height={16} />
        <View style={styles.phoneNum}>
          <IcProfileOff />
          <Space width={20} />
          <Text style={styles.phoneNumText}>{profile.mobilePhone}</Text>
        </View>
        <Space height={16} />
        <View style={styles.point}>
          <IcProfileOff />
          <Space width={20} />
          <Text style={styles.pointText}>{profile.point} Point</Text>
        </View>
        <Space height={16} />
        <View style={styles.infoApp}>
          <IcProfileOff />
          <Space width={20} />
          <Text style={styles.infoAppText}>Info App</Text>
        </View>
      </View>
      <View style={styles.btnContainer} />
      <Button labelBtn="Logout" btnColor="#F6BFBF" onPress={handleSginOut} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  mainContainer: {paddingVertical: 20, paddingHorizontal: 20, flex: 1},
  pictContainer: {
    backgroundColor: '#FFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 100,
    paddingVertical: 20,
    borderRadius: 25,
  },
  name: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    marginTop: 14,
    color: '#000',
  },
  couirerText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#B4B3BB',
  },
  dataContainer: {
    backgroundColor: '#FFFF',
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingVertical: 20,
    borderRadius: 20,
  },
  email: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  emailText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    alignSelf: 'flex-end',
  },
  phoneNum: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  phoneNumText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    alignSelf: 'flex-end',
  },
  point: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  pointText: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  infoApp: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  infoAppText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    alignSelf: 'flex-end',
  },
  btnContainer: {flex: 1},
});
