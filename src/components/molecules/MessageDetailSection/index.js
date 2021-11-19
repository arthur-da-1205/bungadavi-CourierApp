import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MessageDetailSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Message</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{' '}
      </Text>
    </View>
  );
};

export default MessageDetailSection;

const styles = StyleSheet.create({
  container: {paddingHorizontal: 24, backgroundColor: '#FFFF'},
  titleStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginBottom: 4,
    color: '#000',
  },
});
