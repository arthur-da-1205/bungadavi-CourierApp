import React from 'react';
import {Text, View} from 'react-native';
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
      <InfoList label="Invoice" labelValue={invoice} />
      <InfoList label="Timeslot" labelValue={timeslot} />
      <InfoList label="Date" labelValue={date} />
      <InfoList label="From" labelValue={from} />
      <InfoList label="To" labelValue={to} />
    </View>
  );
};

export default DetailTransactionSection;
