import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '~/screens';
export type HomeStackParamList = { HomeScreen: undefined };
export default function HomeStackNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={'HomeScreen'}
                component={HomeScreen}
            />


        </Stack.Navigator>
    );
}