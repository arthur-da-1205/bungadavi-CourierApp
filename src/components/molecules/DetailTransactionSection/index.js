import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {InfoList} from '../../atoms';

const DetailTransactionSection = ({
  title,
  invoice,
  timeslot,
  date,
  from,
  to,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <InfoList label="Invoice" labelValue={invoice} />
      <InfoList label="Timeslot" labelValue={timeslot} />
      <InfoList label="Date" labelValue={date} />
      <InfoList label="From" labelValue={from} />
      <InfoList label="To" labelValue={to} />
    </View>
  );
};

export default DetailTransactionSection;

const styles = StyleSheet.create({
  container: {paddingHorizontal: 24, backgroundColor: '#FFFF'},
  titleStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginBottom: 4,
    color: '#000',
  },
});
