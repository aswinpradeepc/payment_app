import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import axios from 'axios';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Payment'>;

const PaymentScreen = () => {
  const route = useRoute();
  const navigation = useNavigation<NavigationProp>();
  const { accountNumber } = route.params as { accountNumber: string };
  const [paymentAmount, setPaymentAmount] = useState('');

  const handlePayment = async () => {
    try {
      await axios.post('https://payment.radr.in/payments', {
        account_number: accountNumber,
        payment_amount: parseFloat(paymentAmount),
      });
      navigation.navigate('PaymentSuccess', { accountNumber });
    } catch (error) {
      console.error(error);
      alert('Payment Failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Make a Payment</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Payment Amount"
        value={paymentAmount}
        onChangeText={setPaymentAmount}
        keyboardType="numeric"
      />
      <Button title="Submit Payment" onPress={handlePayment} color="#175cff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b163f',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default PaymentScreen;