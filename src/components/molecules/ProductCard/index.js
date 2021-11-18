import React from 'react';
import {Image, Text, View} from 'react-native';
import {productDummy} from '../../../assets';

const ProductCard = () => {
  return (
    <View style={{paddingHorizontal: 24, backgroundColor: '#FFFF'}}>
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: 14,
          marginBottom: 10,
          color: '#000',
        }}>
        Item Ordered
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
          alignItems: 'center',
        }}>
        <Image source={productDummy} />
        <View>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
              color: '#000',
            }}>
            Product Name
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
            }}>
            Product Description
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
              color: '#000',
            }}>
            Status
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
              color: '#1ABC9C',
            }}>
            Assigning
          </Text>
        </View>
      </View>
    </View>
  );
};
export default ProductCard;
