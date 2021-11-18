import React from 'react';
import {Text, View} from 'react-native';
import {InfoList} from '../../atoms';

const RecepientDetailSection = ({title, name, phone, address, email, city}) => {
  return (
    <View style={{paddingHorizontal: 24, backgroundColor: '#FFFF'}}>
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: 14,
          marginBottom: 4,
          color: '#000',
        }}>
        {title}
      </Text>
      <InfoList label="Name" labelValue={name} />
      <InfoList label="Phone no." labelValue={phone} />
      <InfoList label="Address" labelValue={address} />
      <InfoList label="Email" labelValue={email} />
      <InfoList label="City" labelValue={city} />
    </View>
  );
};

export default RecepientDetailSection;
