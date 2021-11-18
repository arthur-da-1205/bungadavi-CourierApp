import React from 'react';
import {Text, View} from 'react-native';

const InfoList = ({label, labelValue}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={{flex: 1}}>
        <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12}}>
          {label}
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Text
          style={{
            textAlign: 'right',
            fontFamily: 'Poppins-Regular',
            fontSize: 14,
            color: '#000',
          }}>
          {labelValue}
        </Text>
      </View>
    </View>
  );
};

export default InfoList;
