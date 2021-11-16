import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {productDummy} from '../../assets';
import {Header, OrderCard} from '../../components';
import {dummyCourierTask} from '../../data/dummy';

const dummyData = dummyCourierTask;

const OnDeliveryScreen = () => {
  return (
    <SafeAreaView style={styles.contentContainer}>
      <Header
        headerTitle="On Delivery"
        headerSubtitle="Package should be sent"
      />
      <ScrollView style={styles.content}>
        {dummyData.map((item, index) => {
          if (item.statusOrder === 'on-delivery') {
            return (
              <OrderCard
                key={index}
                productImg={productDummy}
                orderInv={item.orderID}
                address={item.address}
                date={item.date}
                timeSlot={item.timeslot}
                statusTask={item.statusOrder}
              />
            );
          }
          return;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default OnDeliveryScreen;

const styles = StyleSheet.create({
  content: {paddingHorizontal: 8, paddingVertical: 20},
  contentContainer: {paddingBottom: 30},
});
