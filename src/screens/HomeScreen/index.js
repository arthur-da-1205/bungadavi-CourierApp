import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import {icAssign, icDeliver, icDone, IlHomepage} from '../../assets';
import {Space} from '../../components';
import {getData} from '../../utils/storage';
import {API_HOST} from '../../config';

const HomeScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [courierUuid, setCourierUuid] = useState('');
  const [bearerToken, setBearerToken] = useState('');

  const [deviceToken, setDeviceToken] = useState('');

  const [counterAssign, setCounterAssign] = useState('');
  const [counterOnDelivery, setCounterOnDelivery] = useState(0);
  const [counterFinish, setCounterFinish] = useState(0);

  console.log(deviceToken);

  Geolocation.getCurrentPosition(info => {
    console.log('longtitude', info.coords.longitude);
    console.log('altitude', info.coords.latitude);
  });

  useEffect(() => {
    getData('USER_PROFILE').then(res => {
      setUsername(res.fullName);
      setCourierUuid(res.uuid);
    });

    getData('TOKEN').then(res => {
      setBearerToken(res);
    });
    getData('DEVICE_TOKEN').then(res => {
      setDeviceToken(res);
    });
  }, []);

  const token = bearerToken.value;
  useEffect(() => {
    API_HOST.get('/status_assigned', {
      params: {courier_uuid: courierUuid},
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        setCounterAssign(res.data.msg[0].ASSIGNED_TOTAL);
      })
      .catch(err => {
        console.log(err);
      });

    API_HOST.get('/status_on_delivery', {
      params: {courier_uuid: courierUuid},
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        setCounterOnDelivery(res.data.msg[0].ON_DELIVERY_TOTAL);
      })
      .catch(err => {
        console.log(err);
      });

    API_HOST.get('/status_finish', {
      params: {courier_uuid: courierUuid},
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        setCounterFinish(res.data.msg[0].FINISH_TOTAL);
      })
      .catch(err => {
        console.log(err);
      });
  }, [courierUuid, token]);
  // useEffect(() => {
  //   API_HOST.put('/add_fcm', registerToken, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   })
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, [registerToken, token]);

  return (
    <View>
      <View style={styles.headerTriangle} />
      <View style={styles.ilusContainer}>
        <Text style={styles.textHeader}>Hallo, {username}</Text>
      </View>
      <View style={styles.ilustration}>
        <IlHomepage />
      </View>
      <Space height={160} />
      <View style={styles.content}>
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.btnMenu}
            onPress={() => navigation.navigate('AssignOrderScreen')}>
            <Image source={icAssign} />
            <Text style={styles.labelBtn}>New Assign</Text>
            <Text style={styles.lableCounter}>{counterAssign}</Text>
          </TouchableOpacity>
          <Space height={20} />

          <TouchableOpacity
            style={styles.btnMenu}
            onPress={() => navigation.navigate('OnDeliveryScreen')}>
            <Image source={icDeliver} />
            <Text style={styles.labelBtn}>On Delivery</Text>
            <Text style={styles.lableCounter}>{counterOnDelivery}</Text>
          </TouchableOpacity>
          <Space height={20} />
          <TouchableOpacity
            style={styles.btnMenu}
            onPress={() => navigation.navigate('DoneScreen')}>
            <Image source={icDone} />
            <Text style={styles.labelBtn}>Done</Text>
            <Text style={styles.lableCounter}>{counterFinish}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerTriangle: {
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: Dimensions.get('window').width * 1.2,
    borderTopWidth: Dimensions.get('window').width * 0.4,
    borderRightColor: 'transparent',
    borderTopColor: '#AE0F85',
    flex: 1,
  },
  textHeader: {
    color: '#FFFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ilustration: {
    position: 'absolute',
    alignItems: 'flex-end',
    right: 0,
    top: 47,
  },
  menuContainer: {
    backgroundColor: 'rgba(202, 59, 165, 0.15)',
    height: Dimensions.get('window').height * 0.37,
    borderRadius: 35,
    paddingHorizontal: 16,
    paddingVertical: 20,
    justifyContent: 'center',
  },
  btnMenu: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 45,
    alignItems: 'center',
    paddingVertical: 12,
    paddingLeft: 32,
  },
  labelBtn: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 50,
  },
  lableCounter: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 70,
  },
  ilusContainer: {position: 'absolute', paddingLeft: 24, paddingTop: 24},
  content: {paddingHorizontal: 14},
});
