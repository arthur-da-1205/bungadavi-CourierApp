import React from 'react';
import {Image, Text, View} from 'react-native';
import {IcProfileOff, IcProfileOn, profileImage} from '../../assets';
import {Button, Space} from '../../components';

const ProfileScreen = () => {
  return (
    <View style={{paddingVertical: 20, paddingHorizontal: 20, flex: 1}}>
      <View
        style={{
          backgroundColor: '#FFFF',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 100,
          paddingVertical: 20,
          borderRadius: 25,
        }}>
        <Image source={profileImage} />
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 20,
            marginTop: 14,
            color: '#000',
          }}>
          John Doe
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 14,
            color: '#B4B3BB',
          }}>
          Courier
        </Text>
      </View>
      <Space height={50} />
      <View
        style={{
          backgroundColor: '#FFFF',
          justifyContent: 'center',
          paddingHorizontal: 28,
          paddingVertical: 20,
          borderRadius: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
          }}>
          <IcProfileOff />
          <Space width={20} />
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
              alignSelf: 'flex-end',
            }}>
            email@app.com
          </Text>
        </View>
        <Space height={16} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
          }}>
          <IcProfileOff />
          <Space width={20} />
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
              alignSelf: 'flex-end',
            }}>
            0891xxxxx
          </Text>
        </View>
        <Space height={16} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
          }}>
          <IcProfileOff />
          <Space width={20} />
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
              alignSelf: 'flex-end',
            }}>
            10 Points
          </Text>
        </View>
        <Space height={16} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
          }}>
          <IcProfileOff />
          <Space width={20} />
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
              alignSelf: 'flex-end',
            }}>
            Info App
          </Text>
        </View>
      </View>
      <View style={{flex: 1}} />
      <Button labelBtn="Logout" />
    </View>
  );
};

export default ProfileScreen;
