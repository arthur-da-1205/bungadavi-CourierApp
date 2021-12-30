import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import {productDummy} from '../../assets';
import {Header, OrderCard} from '../../components';
import {API_HOST} from '../../config';
import {dummyCourierTask} from '../../data/dummy';
import {getAssignData, setLoading} from '../../redux/action';
import {getData} from '../../utils/storage';

const dummyData = dummyCourierTask;

// console.log(data);

const AssignOrderScreen = ({data, navigation}) => {
  const dispatch = useDispatch();
  const {courierAssign} = useSelector(state => state.courierAssignReducer);
  const [assignData, setAssignData] = useState([]);
  const [token, setToken] = useState('');
  const [uuid, setUuid] = useState('');

  useEffect(() => {
    getData('USER_PROFILE').then(res => {
      setUuid(res.uuid);
    });

    getData('TOKEN').then(res => {
      setToken(res);
    });
    API_HOST.get(`/courier_assign?courier_uuid=${uuid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        dispatch(setLoading(false));
        console.log('Success fetch data');
        console.log(res.data);
      })
      .catch(err => {
        dispatch(setLoading(false));
        console.log('Error: ', err);
      });
  }, []);
  console.log(token);
  console.log(uuid);

  return (
    <SafeAreaView style={styles.contentContainer}>
      <Header headerTitle="Your Task" headerSubtitle="New task assign" />
      <ScrollView style={styles.content}>
        {dummyData.map((item, index) => {
          if (item.statusOrder === 'assigning') {
            return (
              <OrderCard
                key={index}
                productImg={productDummy}
                orderInv={item.orderID}
                address={item.address}
                date={item.date}
                timeSlot={item.timeslot}
                statusTask={item.statusOrder}
                onDetail={() => navigation.navigate('DetailScreen', item)}
              />
            );
          }
          return;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AssignOrderScreen;

const styles = StyleSheet.create({
  content: {paddingHorizontal: 8, paddingVertical: 20},
  contentContainer: {paddingBottom: 30},
});
