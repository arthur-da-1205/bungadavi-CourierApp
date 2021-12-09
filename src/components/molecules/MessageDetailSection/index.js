import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MessageDetailSection = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Message</Text>
      <Text>{message}</Text>
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
