import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const menuItems = [
  { id: 1, icon: 'person-outline', label: 'Profile' },
  { id: 2, icon: 'time-outline', label: 'History' },
  { id: 3, icon: 'chatbubbles-outline', label: 'Support Chat' },
  { id: 4, icon: 'wallet-outline', label: 'Deposit' },
  { id: 5, icon: 'cash-outline', label: 'Withdraw' },
];

export default function CustomDrawer(props: any) {
  return (
    <DrawerContentScrollView {...props} className="flex-1 bg-[#20151a]">
      <View className="flex-1 p-4">
        {menuItems.map((item) => (
          <Pressable
            key={item.id}
            className="flex-row items-center py-4 px-2 mb-2 active:opacity-70 rounded-xl active:bg-[#1cdbd6]/10"
          >
            <Ionicons name={item.icon as any} size={24} color="#1cdbd6" />
            <Text className="text-[#1cdbd6] text-base ml-3">{item.label}</Text>
          </Pressable>
        ))}
        
        <View className="h-[1px] bg-[#333333]/30 my-2" />
        
        <Pressable className="flex-row items-center py-4 px-2 active:opacity-70 rounded-xl active:bg-[#1cdbd6]/10">
          <Ionicons name="log-out-outline" size={24} color="#ff4444" />
          <Text className="text-[#ff4444] text-base ml-3">Logout</Text>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
} 