import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {productDummy} from '../../assets';
import {Header, OrderCard} from '../../components';

const OnDeliveryScreen = () => {
  return (
    <SafeAreaView style={{paddingBottom: 30}}>
      <Header
        headerTitle="On Delivery"
        headerSubtitle="Package should be sent"
      />
      <ScrollView style={styles.content}>
        <OrderCard
          productImg={productDummy}
          orderInv="SBDC1205940004C"
          address="Jl. Jambu V no 16 Perumnas Kamal"
          date="19 November 2021"
          timeSlot="09.00 AM - 12.00 AM"
          statusTask="On Delivery"
        />
        <OrderCard
          productImg={productDummy}
          orderInv="SBDC1205940004C"
          address="Jl. Jambu V no 16 Perumnas Kamal"
          date="19 November 2021"
          timeSlot="09.00 AM - 12.00 AM"
          statusTask="On Delivery"
        />
        <OrderCard
          productImg={productDummy}
          orderInv="SBDC1205940004C"
          address="Jl. Jambu V no 16 Perumnas Kamal"
          date="19 November 2021"
          timeSlot="09.00 AM - 12.00 AM"
          statusTask="On Delivery"
        />
        <OrderCard
          productImg={productDummy}
          orderInv="SBDC1205940004C"
          address="Jl. Jambu V no 16 Perumnas Kamal"
          date="19 November 2021"
          timeSlot="09.00 AM - 12.00 AM"
          statusTask="On Delivery"
        />
        <OrderCard
          productImg={productDummy}
          orderInv="SBDC1205940004C"
          address="Jl. Jambu V no 16 Perumnas Kamal"
          date="19 November 2021"
          timeSlot="09.00 AM - 12.00 AM"
          statusTask="On Delivery"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OnDeliveryScreen;

const styles = StyleSheet.create({
  content: {paddingHorizontal: 8, paddingVertical: 20},
});
