import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, ScrollView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navbar from './components/Navbar';
import BannerSlider from './components/BannerSlider';
import WinnerNotification from './components/WinnerNotification';
import NavigationIcons from './components/NavigationIcons';
import GameGrid from './components/GameGrid';
import BottomNav from './components/BottomNav';
import CustomDrawer from './components/CustomDrawer';

import './global.css';

const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <View className="flex-1 bg-[#20151a]">
      <ScrollView>
        <BannerSlider />
        <WinnerNotification />
        <NavigationIcons />
        <GameGrid />
      </ScrollView>
      <BottomNav />
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor="#20151a" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
              header: () => <Navbar />,
              drawerStyle: {
                backgroundColor: '#20151a',
                width: '75%',
              },
            }}
          >
            <Drawer.Screen 
              name="Home" 
              component={HomeScreen}
              options={{
                headerShown: true,
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
