import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {InfoList} from '../../atoms';

const RecepientDetailSection = ({
  title,
  name,
  phone,
  address,
  addressDetail,
  email,
  city,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <InfoList label="Name" labelValue={name} />
      <InfoList label="Phone no." labelValue={phone} />
      <InfoList label="Address" labelValue={address} />
      <InfoList label="Address Info" labelValue={addressDetail} />
      <InfoList label="Email" labelValue={email} />
      <InfoList label="City" labelValue={city} />
    </View>
  );
};

export default RecepientDetailSection;

const styles = StyleSheet.create({
  container: {paddingHorizontal: 24, backgroundColor: '#FFFF'},
  titleStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginBottom: 4,
    color: '#000',
  },
});
