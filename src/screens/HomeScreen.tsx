import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View>
      <Text>Welcome to the Loan Payment App</Text>
      <Button title="Make a Payment" onPress={() => navigation.navigate('Payment')} />
    </View>
  );
};

export default HomeScreen;