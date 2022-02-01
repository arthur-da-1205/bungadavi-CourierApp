import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {noImage} from '../../../assets';

const ProductCard = ({
  productImg,
  productName,
  productDesc,
  statusLabel,
  statusValue,
}) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.itemTitle}>Item Ordered</Text>
      <View style={styles.contentContainer}>
        <View style={styles.imgContainer}>
          {productImg ? (
            <Image source={productImg} style={styles.imgStyle} />
          ) : (
            <Image source={noImage} style={styles.imgStyle} />
          )}
        </View>
        <View style={styles.productContainer}>
          <Text style={styles.productName}>{productName}</Text>
          <Text style={styles.productDesc}>{productDesc}</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>{statusLabel}</Text>
          <Text style={styles.statusValue}>{statusValue}</Text>
        </View>
      </View>
    </View>
  );
};
export default ProductCard;

const styles = StyleSheet.create({
  cardContainer: {paddingHorizontal: 24, backgroundColor: '#FFFF'},
  itemTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginBottom: 10,
    color: '#000',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  imgContainer: {flex: 1},
  productContainer: {flex: 2},
  productName: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000',
  },
  productDesc: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  imgStyle: {width: 80, height: 77, borderRadius: 10},
  statusContainer: {flex: 0.7},
  status: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000',
  },
  statusValue: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#1ABC9C',
  },
});
