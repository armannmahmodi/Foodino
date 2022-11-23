import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartScreen } from '~/screens';
export type CartStackParamList = { CartScreen: any };
export default function CartStackNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={'CartScreen'}
                component={CartScreen}
            />

        </Stack.Navigator>
    );
}