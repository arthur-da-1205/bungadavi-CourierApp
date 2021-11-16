import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {productDummy} from '../../assets';
import {Header, OrderCard} from '../../components';
import {dummyCourierTask} from '../../data/dummy';

const data = dummyCourierTask;

console.log(data);

const AssignOrderScreen = () => {
  return (
    <SafeAreaView style={{paddingBottom: 30}}>
      <Header headerTitle="Your Task" headerSubtitle="New task assign" />
      <ScrollView style={styles.content}>
        <OrderCard
          productImg={productDummy}
          orderInv="SBDC1205940004C"
          address="Jl. Jambu V no 16 Perumnas Kamal"
          date="19 November 2021"
          timeSlot="09.00 AM - 12.00 AM"
          statusTask="Assigning"
        />
        <OrderCard
          productImg={productDummy}
          orderInv="SBDC1205940004C"
          address="Jl. Jambu V no 16 Perumnas Kamal"
          date="19 November 2021"
          timeSlot="09.00 AM - 12.00 AM"
          statusTask="Assigning"
        />
        <OrderCard
          productImg={productDummy}
          orderInv="SBDC1205940004C"
          address="Jl. Jambu V no 16 Perumnas Kamal"
          date="19 November 2021"
          timeSlot="09.00 AM - 12.00 AM"
          statusTask="Assigning"
        />
        <OrderCard
          productImg={productDummy}
          orderInv="SBDC1205940004C"
          address="Jl. Jambu V no 16 Perumnas Kamal"
          date="19 November 2021"
          timeSlot="09.00 AM - 12.00 AM"
          statusTask="Accepted"
        />
        <OrderCard
          productImg={productDummy}
          orderInv="SBDC1205940004C"
          address="Jl. Jambu V no 16 Perumnas Kamal"
          date="19 November 2021"
          timeSlot="09.00 AM - 12.00 AM"
          statusTask="Accepted"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AssignOrderScreen;

const styles = StyleSheet.create({
  content: {paddingHorizontal: 8, paddingVertical: 20},
});
