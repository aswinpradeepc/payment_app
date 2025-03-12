import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AccountNumber'>;

const AccountNumberScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [accountNumber, setAccountNumber] = useState('');

  const handleSubmit = () => {
    navigation.navigate('Profile', { accountNumber });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Account Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Account Number"
        value={accountNumber}
        onChangeText={setAccountNumber}
      />
      <Button title="Submit" onPress={handleSubmit} color="#175cff" />
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

export default AccountNumberScreen;