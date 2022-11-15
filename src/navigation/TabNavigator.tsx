import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '~/screens';

const Tab = createBottomTabNavigator();

export type TabNavigatorStackParamList = { HomeStack: undefined };

export default function TabNavigator() {
    return (
        <Tab.Navigator >
            <Tab.Screen
                name={'HomeScreen'}
                component={HomeScreen}
            />
        </Tab.Navigator>
    )
}