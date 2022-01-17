import Barcode from '@kichiyaki/react-native-barcode-generator';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {Space} from '../../components';

const QRCodeScreen = ({route}) => {
  const {code_order_transaction} = route.params;
  return (
    <View style={styles.container}>
      <QRCode
        value={code_order_transaction}
        color={'#2C8DDB'}
        backgroundColor={'white'}
        size={200}
      />
      <Space height={30} />
      <Barcode value={code_order_transaction} lineColor="#2C8DDB" width={1.8} />
      <Text>DO Number : {code_order_transaction}</Text>
    </View>
  );
};

export default QRCodeScreen;

const styles = StyleSheet.create({
  container: {marginTop: 130, justifyContent: 'center', alignItems: 'center'},
});
