import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'PaymentSuccess'>;

const PaymentSuccessScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute();
  const { accountNumber } = route.params as { accountNumber: string };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Successful!</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile', { accountNumber })}
        color="#175cff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b163f',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
});

export default PaymentSuccessScreen;