import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

import {icArrowRight, noImage} from '../../../assets';

const OrderCard = ({
  orderInv,
  address,
  date,
  timeSlot,
  statusTask,
  productImg,
  onDetail,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onDetail}>
      {productImg ? (
        <Image source={productImg} style={styles.imgStyle} />
      ) : (
        <Image source={noImage} style={styles.imgStyle} />
      )}
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
    'Assigned',
    'Accept',
    'Rejected',
    'On Delivery',
    'Finish',
    'Returned',
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
  imgStyle: {width: 80, height: 76, borderRadius: 8},
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
