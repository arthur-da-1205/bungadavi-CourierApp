import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const InfoList = ({label, labelValue}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textLabel}>{label}</Text>
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.labelValue}>{labelValue}</Text>
      </View>
    </View>
  );
};

export default InfoList;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-between'},
  content: {flex: 1},
  textLabel: {fontFamily: 'Poppins-Regular', fontSize: 12},
  labelValue: {
    textAlign: 'right',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000',
  },
  valueContainer: {flex: 1},
});
