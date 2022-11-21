import { SafeAreaView } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from '~/navigation/MainStack';
import { NativeBaseProvider } from 'native-base';
import { navigationRef } from '~/navigation/Methods';
export default function App() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NativeBaseProvider >
        <NavigationContainer ref={navigationRef}>
          <HomeStack />
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}

