import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WinnerNotification() {
  return (
    <View className="mx-4 mt-2 mb-4">
      <View className="bg-[#1cdbd6]/10 border border-[#1cdbd6]/20 rounded-xl p-4 flex-row items-center">
        <View className="w-8 h-8 bg-[#1cdbd6]/20 rounded-full items-center justify-center mr-3">
          <Ionicons name="trophy-outline" size={18} color="#1cdbd6" />
        </View>
        <View className="flex-1">
          <Text className="text-[#1cdbd6] font-medium">
            Congratulations Nofp56789
          </Text>
          <Text className="text-[#1cdbd6]/80 text-sm mt-0.5">
            for winning XR$ 100
          </Text>
        </View>
      </View>
    </View>
  );
} 