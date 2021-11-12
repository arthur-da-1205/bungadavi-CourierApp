import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {productDummy} from '../../assets';
import {Header, OrderCard} from '../../components';

const DoneScreen = () => {
  return (
    <SafeAreaView style={{paddingBottom: 30}}>
      <Header headerTitle="Your Task" headerSubtitle="Finished task" />
      <ScrollView style={styles.content}>
        <OrderCard
          productImg={productDummy}
          orderInv="SBDC1205940004C"
          address="Jl. Jambu V no 16 Perumnas Kamal"
          date="19 November 2021"
          timeSlot="09.00 AM - 12.00 AM"
          statusTask="Finished"
        />
        <OrderCard
          productImg={productDummy}
          orderInv="SBDC1205940004C"
          address="Jl. Jambu V no 16 Perumnas Kamal"
          date="19 November 2021"
          timeSlot="09.00 AM - 12.00 AM"
          statusTask="Finished"
        />
        <OrderCard
          productImg={productDummy}
          orderInv="SBDC1205940004C"
          address="Jl. Jambu V no 16 Perumnas Kamal"
          date="19 November 2021"
          timeSlot="09.00 AM - 12.00 AM"
          statusTask="Finished"
        />
        <OrderCard
          productImg={productDummy}
          orderInv="SBDC1205940004C"
          address="Jl. Jambu V no 16 Perumnas Kamal"
          date="19 November 2021"
          timeSlot="09.00 AM - 12.00 AM"
          statusTask="Finished"
        />
        <OrderCard
          productImg={productDummy}
          orderInv="SBDC1205940004C"
          address="Jl. Jambu V no 16 Perumnas Kamal"
          date="19 November 2021"
          timeSlot="09.00 AM - 12.00 AM"
          statusTask="Finished"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoneScreen;

const styles = StyleSheet.create({
  content: {paddingHorizontal: 8, paddingVertical: 20},
});
