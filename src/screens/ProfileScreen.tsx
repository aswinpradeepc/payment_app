import React, { useEffect, useState } from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { getCustomerDetails, getPaymentHistory } from '../services/api';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Profile'>;

const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation<NavigationProp>();
  const { accountNumber } = route.params as { accountNumber: string };
  const [customerDetails, setCustomerDetails] = useState<any>(null);
  const [paymentHistory, setPaymentHistory] = useState<any[]>([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const customers = await getCustomerDetails();
        const customer = customers.find((c: any) => c.account_number === accountNumber);
        if (customer) {
          setCustomerDetails(customer);
          const history = await getPaymentHistory(accountNumber);
          setPaymentHistory(history);
        } else {
          alert('Customer not found');
        }
      } catch (error) {
        console.error(error);
        alert('Error fetching details');
      }
    };

    fetchDetails();
  }, [accountNumber]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Profile</Text>
        {customerDetails && (
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsTitle}>Customer Details</Text>
            <Text>Account Number: {customerDetails.account_number}</Text>
            <Text>Name: {customerDetails.name}</Text>
            <Text>Email: {customerDetails.email}</Text>
            <Text>Phone: {customerDetails.phone}</Text>
            <Text>Address: {customerDetails.address}</Text>
            <Text>Issue Date: {customerDetails.issue_date}</Text>
            <Text>Interest Rate: {customerDetails.interest_rate}</Text>
            <Text>Tenure: {customerDetails.tenure}</Text>
            <Text>EMI Due: {customerDetails.emi_due}</Text>
          </View>
        )}
        {paymentHistory.length > 0 && (
          <View style={styles.historyContainer}>
            <Text style={styles.detailsTitle}>Payment History</Text>
            {paymentHistory.map((payment, index) => (
              <View key={index} style={styles.paymentItem}>
                <Text>Payment Date: {payment.payment_date}</Text>
                <Text>Payment Amount: {payment.payment_amount}</Text>
                <Text>Status: {payment.status}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Pay EMI" onPress={() => navigation.navigate('Payment', { accountNumber })} color="#175cff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b163f',
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  detailsTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  historyContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  paymentItem: {
    marginBottom: 10,
  },
  buttonContainer: {
    padding: 20,
    backgroundColor: '#0b163f',
  },
});

export default ProfileScreen;