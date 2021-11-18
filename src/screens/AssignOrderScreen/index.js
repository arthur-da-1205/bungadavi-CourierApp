import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {productDummy} from '../../assets';
import {Header, OrderCard} from '../../components';
import {dummyCourierTask} from '../../data/dummy';

const dummyData = dummyCourierTask;

// console.log(data);

const AssignOrderScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.contentContainer}>
      <Header headerTitle="Your Task" headerSubtitle="New task assign" />
      <ScrollView style={styles.content}>
        {dummyData.map((item, index) => {
          if (item.statusOrder === 'assigning') {
            return (
              <OrderCard
                key={index}
                productImg={productDummy}
                orderInv={item.orderID}
                address={item.address}
                date={item.date}
                timeSlot={item.timeslot}
                statusTask={item.statusOrder}
                onDetail={() => navigation.navigate('DetailScreen')}
              />
            );
          }
          return;
        })}

        {/* <OrderCard
          productImg={productDummy}
          orderInv="SBDC1205940004C"
          address="Jl. Jambu V no 16 Perumnas Kamal"
          date="19 November 2021"
          timeSlot="09.00 AM - 12.00 AM"
          statusTask="assigning"
        />
        <OrderCard
          productImg={productDummy}
          orderInv="SBDC1205940004C"
          address="Jl. Jambu V no 16 Perumnas Kamal"
          date="19 November 2021"
          timeSlot="09.00 AM - 12.00 AM"
          statusTask="assigning"
        />
        <OrderCard
          productImg={productDummy}
          orderInv="SBDC1205940004C"
          address="Jl. Jambu V no 16 Perumnas Kamal"
          date="19 November 2021"
          timeSlot="09.00 AM - 12.00 AM"
          statusTask="accepted"
        />
        <OrderCard
          productImg={productDummy}
          orderInv="SBDC1205940004C"
          address="Jl. Jambu V no 16 Perumnas Kamal"
          date="19 November 2021"
          timeSlot="09.00 AM - 12.00 AM"
          statusTask="accepted"
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AssignOrderScreen;

const styles = StyleSheet.create({
  content: {paddingHorizontal: 8, paddingVertical: 20},
  contentContainer: {paddingBottom: 30},
});
