import React from 'react';
import {Text, View} from 'react-native';

const MessageDetailSection = () => {
  return (
    <View style={{paddingHorizontal: 24, backgroundColor: '#FFFF'}}>
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: 14,
          marginBottom: 4,
          color: '#000',
        }}>
        Message
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{' '}
      </Text>
    </View>
  );
};

export default MessageDetailSection;
