import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Space} from '../../components';
import {API_HOST} from '../../config';

const SummaryScreen = () => {
  const [selectedPeriode, setSelectedPeriode] = useState();

  // const hitPeriode = () => {
  //   API_HOST.get('', {
  //     params:
  //   })
  // }

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
        <TouchableOpacity style={styles.btnContainer}>
          <Icon name="filter-variant" size={35} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Text>Content</Text>
      </View>
    </SafeAreaView>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: 'white', padding: 10},
  filterContainer: {
    flex: 1,
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
  contentContainer: {flex: 3},
});
