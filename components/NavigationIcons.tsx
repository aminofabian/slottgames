import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const navigationItems = [
  { id: 1, icon: 'gift-outline', label: 'Free Coins', value: '0' },
  { id: 2, icon: 'star-outline', label: 'VIP Reward' },
  { id: 3, icon: 'cube-outline', label: 'Value Pack' },
  { id: 4, icon: 'chatbubbles-outline', label: 'Message' },
  { id: 5, icon: 'people-outline', label: 'Referral' },
];

export default function NavigationIcons() {
  return (
    <View className="flex-row justify-between px-6 py-4">
      {navigationItems.map((item) => (
        <Pressable 
          key={item.id}
          className="items-center active:opacity-70"
        >
          <View className="relative">
            <View className="w-12 h-12 bg-[#1cdbd6]/10 rounded-2xl items-center justify-center mb-1">
              <Ionicons name={item.icon as any} size={24} color="#1cdbd6" />
            </View>
            {item.value && (
              <View className="absolute -top-1 -right-1 bg-[#1cdbd6] rounded-full min-w-[18px] h-[18px] items-center justify-center">
                <Text className="text-[#20151a] text-xs font-medium px-1">{item.value}</Text>
              </View>
            )}
          </View>
          <Text className="text-[#1cdbd6] text-xs mt-1">{item.label}</Text>
        </Pressable>
      ))}
    </View>
  );
} 