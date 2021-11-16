import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

import {icArrowRight} from '../../../assets';

const OrderCard = ({
  orderInv,
  address,
  date,
  timeSlot,
  statusTask,
  productImg,
}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={productImg} />
      <View style={styles.textContainer}>
        <Text style={styles.invText}>{orderInv}</Text>
        <Text style={styles.addressText}>{address}</Text>
      </View>
      <View style={styles.rightRowText}>
        <Text style={styles.dateText}>{date}</Text>
        <Text style={styles.timeSlotText}>{timeSlot}</Text>
        <Text style={styles.statusTask}>{statusTask}</Text>
      </View>
      <View style={styles.detailArrow}>
        <Image source={icArrowRight} />
      </View>
    </TouchableOpacity>
  );
};

OrderCard.propTypes = {
  orderInv: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeSlot: PropTypes.string.isRequired,
  statusTask: PropTypes.oneOf([
    'assigning',
    'accepted',
    'rejected',
    'on-delivery',
    'done',
    'returned',
  ]).isRequired,
};

const styles = StyleSheet.create({
  card: {
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
  detailArrow: {justifyContent: 'center', marginLeft: 10},
  invText: {fontFamily: 'Poppins-Regular', fontWeight: 'bold', color: '#000'},
  addressText: {fontFamily: 'Poppins-Regular', color: '#000'},
  dateText: {fontFamily: 'Poppins-Regular', fontWeight: '600', color: '#000'},
  timeSlotText: {fontFamily: 'Poppins-Regular', color: '#F64242'},
});

export default OrderCard;
