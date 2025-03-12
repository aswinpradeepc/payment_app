import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from 'axios';

const PaymentScreen = () => {
  const route = useRoute();
  const { accountNumber } = route.params as { accountNumber: string };
  const [paymentAmount, setPaymentAmount] = useState('');

  const handlePayment = async () => {
    try {
      const response = await axios.post('https://payment.radr.in/payments', {
        account_number: accountNumber,
        payment_amount: parseFloat(paymentAmount),
      });
      alert('Payment Successful');
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