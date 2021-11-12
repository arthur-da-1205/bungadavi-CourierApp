import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {icArrowBack} from '../../../assets';

const {width, height} = Dimensions.get('window');

const Header = ({headerTitle, headerSubtitle}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.content}>
        <Image source={icArrowBack} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{headerTitle}</Text>
          <Text style={styles.subtitle}>{headerSubtitle}</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: width,
    backgroundColor: '#FF61C7',
    height: height / 8,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  content: {
    width: width * 0.75,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {alignItems: 'center', justifyContent: 'center'},
  title: {
    color: '#FFFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
  },
  subtitle: {
    color: '#FFFF',
    fontFamily: 'Poppins-Light',
    fontSize: 16,
  },
});
