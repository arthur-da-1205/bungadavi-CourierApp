import React, {useEffect, useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {icAssign, icDeliver, icDone, IlHomepage} from '../../assets';
import {Space} from '../../components';
import {getData} from '../../utils/storage';

const HomeScreen = ({navigation}) => {
  const [token, setToken] = useState('');
  const [uuid, setUuid] = useState('');

  // useEffect(() => {
  //   getData('USER_PROFILE').then(res => {
  //     setUuid(res.uuid);
  //   });

  //   getData('TOKEN').then(res => {
  //     setToken(res);
  //   });
  //   // dispatch(getAssignData(token, uuid));
  //   // setAssignData(getAssignData);
  //   // console.log(assignData);
  // }, []);
  console.log([token, uuid]);
  return (
    <View>
      <View
        style={{
          backgroundColor: 'transparent',
          borderStyle: 'solid',
          borderRightWidth: Dimensions.get('window').width * 1.2,
          borderTopWidth: Dimensions.get('window').width * 0.4,
          borderRightColor: 'transparent',
          borderTopColor: '#AE0F85',
          flex: 1,
        }}
      />
      <View style={{position: 'absolute', paddingLeft: 24, paddingTop: 24}}>
        <Text
          style={{
            color: '#B2B5C0',
            fontFamily: 'Poppins-Regular',
            fontSize: 18,
          }}>
          Good Morning
        </Text>
        <Text
          style={{
            color: '#FFFF',
            fontFamily: 'Poppins-Regular',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Hi, James
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          alignItems: 'flex-end',
          right: 0,
          top: 47,
        }}>
        <IlHomepage />
      </View>
      <Space height={160} />
      <View style={{paddingHorizontal: 14}}>
        <View
          style={{
            backgroundColor: 'rgba(202, 59, 165, 0.15)',
            height: Dimensions.get('window').height * 0.37,
            borderRadius: 35,
            paddingHorizontal: 16,
            paddingVertical: 20,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              borderRadius: 45,
              alignItems: 'center',
              paddingVertical: 12,
              paddingLeft: 32,
            }}
            onPress={() => navigation.navigate('AssignOrderScreen')}>
            <Image source={icAssign} />
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 18,
                color: '#000',
                fontWeight: 'bold',
                marginLeft: 50,
              }}>
              New Assign
            </Text>
          </TouchableOpacity>
          <Space height={20} />

          <TouchableOpacity
            style={{
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              borderRadius: 45,
              alignItems: 'center',
              paddingVertical: 12,
              paddingLeft: 32,
            }}
            onPress={() => navigation.navigate('OnDeliveryScreen')}>
            <Image source={icDeliver} />
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 18,
                color: '#000',
                fontWeight: 'bold',
                marginLeft: 50,
              }}>
              On Delivery
            </Text>
          </TouchableOpacity>
          <Space height={20} />
          <TouchableOpacity
            style={{
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              borderRadius: 45,
              alignItems: 'center',
              paddingVertical: 12,
              paddingLeft: 32,
            }}
            onPress={() => navigation.navigate('DoneScreen')}>
            <Image source={icDone} />
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 18,
                color: '#000',
                fontWeight: 'bold',
                marginLeft: 50,
              }}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
