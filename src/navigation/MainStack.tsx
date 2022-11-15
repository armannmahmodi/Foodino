import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from '~/screens';
import { TabNavigator } from '~/navigation';
export type MainStackParamList = { SplashScreen: undefined; TabNavigator: undefined };
export default function StackNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={'SplashScreen'}
                component={SplashScreen}
            />
            <Stack.Screen
                name={'TabNavigator'}
                component={TabNavigator}
            />

        </Stack.Navigator>
    );
}
