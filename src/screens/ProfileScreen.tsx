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
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Account Number:</Text>
              <Text style={styles.detailValue}>{customerDetails.account_number}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Name:</Text>
              <Text style={styles.detailValue}>{customerDetails.name}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Email:</Text>
              <Text style={styles.detailValue}>{customerDetails.email}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Phone:</Text>
              <Text style={styles.detailValue}>{customerDetails.phone}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Address:</Text>
              <Text style={styles.detailValue}>{customerDetails.address}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Issue Date:</Text>
              <Text style={styles.detailValue}>{customerDetails.issue_date}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Interest Rate:</Text>
              <Text style={styles.detailValue}>{customerDetails.interest_rate}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Tenure:</Text>
              <Text style={styles.detailValue}>{customerDetails.tenure}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>EMI Due:</Text>
              <Text style={styles.detailValue}>{customerDetails.emi_due}</Text>
            </View>
          </View>
        )}
        {paymentHistory.length > 0 && (
          <View style={styles.historyContainer}>
            <Text style={styles.detailsTitle}>Payment History</Text>
            {paymentHistory.map((payment, index) => (
              <View key={index}>
                <View style={styles.paymentItem}>
                  <Text style={styles.paymentLabel}>Payment Date:</Text>
                  <Text style={styles.paymentValue}>{payment.payment_date}</Text>
                  <Text style={styles.paymentLabel}>Payment Amount:</Text>
                  <Text style={styles.paymentValue}>{payment.payment_amount}</Text>
                  <Text style={styles.paymentLabel}>Status:</Text>
                  <Text style={styles.paymentValue}>{payment.status}</Text>
                </View>
                {index < paymentHistory.length - 1 && <View style={styles.divider} />}
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
    textAlign: 'center',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  detailsTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#0b163f',
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailLabel: {
    fontWeight: 'bold',
    color: '#0b163f',
  },
  detailValue: {
    color: '#0b163f',
  },
  historyContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  paymentItem: {
    marginBottom: 10,
  },
  paymentLabel: {
    fontWeight: 'bold',
    color: '#0b163f',
  },
  paymentValue: {
    color: '#0b163f',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  buttonContainer: {
    padding: 20,
    backgroundColor: '#0b163f',
  },
});

export default ProfileScreen;