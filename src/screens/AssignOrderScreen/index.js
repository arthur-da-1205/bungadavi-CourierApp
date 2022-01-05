import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import {productDummy} from '../../assets';
import {Header, OrderCard, Space} from '../../components';
import {getAssignData} from '../../redux/action';
import {getData} from '../../utils/storage';

// console.log(data);

const AssignOrderScreen = ({data, navigation}) => {
  const dispatch = useDispatch();
  const {task} = useSelector(state => state.courierAssignReducer);
  const [token, setToken] = useState('');
  const [uuid, setUuid] = useState('');

  useEffect(() => {
    getData('USER_PROFILE').then(res => {
      setUuid(res.uuid);
    });

    getData('TOKEN').then(res => {
      setToken(res);
    });
  }, []);

  const bearerToken = token.value;
  useEffect(() => {
    if (bearerToken) {
      dispatch(getAssignData(bearerToken, uuid));
    }
  }, [bearerToken]);

  return (
    <SafeAreaView style={styles.contentContainer}>
      <Header headerTitle="Your Task" headerSubtitle="New task assign" />
      <ScrollView style={styles.content}>
        {task ? (
          task.map((item, index) => {
            if (
              item.status_assignment === 'ASSIGNED' ||
              item.status_assignment === 'ACCEPT'
            ) {
              return (
                <OrderCard
                  key={index}
                  productImg={productDummy}
                  orderInv={item.code_order_transaction}
                  address={item.address}
                  date={item.delivery_date}
                  timeSlot={item.time_slot_name}
                  statusTask={item.status_assignment}
                  onDetail={() =>
                    navigation.navigate('DetailScreen', {data: item.id})
                  }
                />
              );
            }
            return;
          })
        ) : (
          <View style={styles.empty}>
            <Space height={200} />
            <Text style={styles.text}>Data not found</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AssignOrderScreen;

const styles = StyleSheet.create({
  content: {paddingHorizontal: 8, paddingVertical: 20},
  contentContainer: {flex: 1, paddingBottom: 30},
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
  },
});
