import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '~/screens';

export type AuthStackParamList = { LoginScreen: any };
const Stack = createNativeStackNavigator();

export default function AuthStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={'LoginScreen'}
                component={LoginScreen}
            />

        </Stack.Navigator>
    );
}