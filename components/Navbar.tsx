import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';
import { useNavbarAnimation } from '../hooks/useNavbarAnimation';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export default function Navbar() {
  const { animatedStyle } = useNavbarAnimation();
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-[#20151a]">
      <Animated.View 
        style={animatedStyle}
        className="bg-[#20151a] shadow-lg shadow-black/50"
      >
        <View className="flex-row items-center justify-between px-6 h-14 border-b border-[#333333]/30 bg-[#20151a]">
          {/* Left side - Menu */}
          <Pressable 
            className="p-2 -ml-2 active:opacity-70"
            android_ripple={{ color: '#1cdbd630', borderless: true, radius: 28 }}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            <Ionicons name="menu-outline" size={28} color="#1cdbd6" />
          </Pressable>

          {/* Center - Credits & Winnings */}
          <View className="flex-row items-center space-x-8">
            <Pressable className="flex-row items-center space-x-2.5 active:opacity-70">
              <View className="w-7 h-7 bg-[#2a2a2a]/80 rounded-full items-center justify-center shadow-sm shadow-black/50">
                <Ionicons name="trophy-outline" size={18} color="#1cdbd6" />
              </View>
              <Text className="text-[#1cdbd6] font-medium text-base">0</Text>
            </Pressable>

            <Pressable className="flex-row items-center space-x-2.5 active:opacity-70">
              <View className="w-7 h-7 bg-[#2a2a2a]/80 rounded-full items-center justify-center shadow-sm shadow-black/50">
                <Ionicons name="cash-outline" size={18} color="#1cdbd6" />
              </View>
              <Text className="text-[#1cdbd6] font-medium text-base">0</Text>
            </Pressable>
          </View>

          {/* Right side - Auth buttons */}
          <View className="flex-row items-center space-x-4">
            <Pressable 
              className="px-3 py-2 rounded-md active:opacity-70"
              android_ripple={{ color: '#1cdbd630', borderless: true }}
            >
              <Text className="text-[#1cdbd6] text-sm font-medium">Sign In</Text>
            </Pressable>

            <Pressable 
              className="bg-[#1cdbd6] px-5 py-2 rounded-md active:opacity-90 shadow-sm shadow-black/50"
              android_ripple={{ color: '#ffffff30', borderless: false }}
            >
              <Text className="text-[#20151a] text-sm font-semibold">Register</Text>
            </Pressable>
          </View>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
} 