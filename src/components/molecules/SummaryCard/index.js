import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const SummaryCard = ({orderInv, address, date, timeSlot}) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.invText}>{orderInv}</Text>
        <Text style={styles.addressText}>{address}</Text>
      </View>
      <View style={styles.rightRowText}>
        <Text style={styles.dateText}>{date}</Text>
        <Text style={styles.timeSlotText}>{timeSlot}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    padding: 6,
    justifyContent: 'center',
    backgroundColor: '#FFFF',
    borderRadius: 10,
    marginBottom: 12,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  rightRowText: {flex: 1, marginLeft: 12},
  statusTask: {color: 'green'},
  invText: {fontFamily: 'Poppins-Regular', fontWeight: 'bold', color: '#000'},
  addressText: {fontFamily: 'Poppins-Regular', color: '#000'},
  dateText: {fontFamily: 'Poppins-Regular', fontWeight: '600', color: '#000'},
  timeSlotText: {fontFamily: 'Poppins-Regular', color: '#F64242'},
});

export default SummaryCard;
