import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {OrderCard, Space} from '../../components';
import {API_HOST} from '../../config';
import {getData} from '../../utils/storage';
import {ScrollView} from 'react-native-gesture-handler';

const SummaryScreen = () => {
  const [selectedPeriode, setSelectedPeriode] = useState();
  const [courierUuid, setCourierUuid] = useState('');
  const [token, setToken] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    getData('USER_PROFILE').then(res => {
      setCourierUuid(res.uuid);
    });

    getData('TOKEN').then(res => {
      setToken(res);
    });
  }, []);

  const bearerToken = token.value;
  const hitPeriode = () => {
    API_HOST.get('/last_status', {
      params: {courier_uuid: courierUuid, last_status: selectedPeriode},
      headers: {Authorization: `Bearer ${bearerToken}`},
    })
      .then(res => {
        console.log(selectedPeriode);
        console.log(res.data.msg);
        setData(res.data.msg);
      })
      .catch(err => {
        setData(null);
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.filterContainer}>
        <View style={styles.pickerBox}>
          <Picker
            selectedValue={selectedPeriode}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedPeriode(itemValue)
            }>
            <Picker.Item label="- Periode -" />
            <Picker.Item label="Satu Pekan" value="one_week" />
            <Picker.Item label="Satu Bulan" value="one_month" />
          </Picker>
        </View>
        <Space width={8} />
        <TouchableOpacity style={styles.btnContainer} onPress={hitPeriode}>
          <Icon name="filter-variant" size={35} color="#FFF" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.contentContainer}>
        {data ? (
          data.map((item, index) => {
            return (
              <OrderCard
                key={index}
                // productImg={{
                //   uri: `https://dashboard.bungadavi.brits-team.com/storage/${item?.image_main_product}`,
                // }}
                orderInv={item.code_order_transaction}
                address={item.address}
                date={item.delivery_date}
                timeSlot={item.time_slot_name}
                statusTask={item.status_assignment}
                // onDetail={() => navigation.navigate('DetailScreen', item)}
              />
            );
          })
        ) : (
          <View style={styles.empty}>
            <Space height={200} />
            <Text style={styles.textEmpty}>Data not found</Text>
          </View>
        )}
        {/* <Text>Content</Text> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: 'white', padding: 10},
  filterContainer: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  pickerBox: {flex: 3, borderWidth: 0.3, borderRadius: 12},
  btnContainer: {
    flex: 0.5,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#FF61C7',
  },
  contentContainer: {flex: 1},
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEmpty: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
});
