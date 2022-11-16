import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OrdersScreen } from '~/screens';
export type OrdersStackParamList = { OrdersScreen: undefined };
const Stack = createNativeStackNavigator();

export default function OrdersStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={'OrdersScreen'}
                component={OrdersScreen}
            />

        </Stack.Navigator>
    );
}