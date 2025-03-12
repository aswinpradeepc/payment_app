import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation, useRoute, CommonActions } from "@react-navigation/native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'PaymentSuccess'>;

const PaymentSuccessScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute();
  const { accountNumber } = route.params as { accountNumber: string };

  const handleGoToProfile = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          { name: 'AccountNumber' },
          { name: 'Profile', params: { accountNumber } },
        ],
      })
    );
  };

  return (
    <View style={styles.container}>
      <Icon name="check-circle" size={100} color="green" style={styles.icon} />
      <Text style={styles.title}>Payment Successful!</Text>
      <Button
        title="Go to Profile"
        onPress={handleGoToProfile}
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
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default PaymentSuccessScreen;