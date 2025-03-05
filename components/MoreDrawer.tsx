import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { 
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
  withTiming,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';

const menuItems = [
  { id: 1, icon: 'person-outline', label: 'Profile' },
  { id: 2, icon: 'time-outline', label: 'History' },
  { id: 3, icon: 'game-controller-outline', label: 'Games' },
];

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

export default function MoreDrawer({ isVisible, onClose }: Props) {
  if (!isVisible) return null;

  return (
    <>
      <Animated.View 
        entering={FadeIn}
        exiting={FadeOut}
        className="absolute inset-0 bg-black/50"
        onTouchStart={onClose}
      />
      <Animated.View
        entering={SlideInDown}
        exiting={SlideOutDown}
        className="absolute bottom-0 w-full bg-[#20151a] rounded-t-3xl"
      >
        <View className="p-6">
          <View className="flex-row flex-wrap gap-4">
            {menuItems.map(item => (
              <Pressable 
                key={item.id}
                className="items-center w-[90px] py-4 bg-[#1cdbd6]/10 rounded-xl active:opacity-70"
              >
                <Ionicons name={item.icon as any} size={24} color="#1cdbd6" />
                <Text className="text-[#1cdbd6] text-sm mt-2">{item.label}</Text>
              </Pressable>
            ))}
          </View>
          <Pressable 
            className="flex-row items-center mt-6 py-4 px-4 bg-[#1cdbd6]/10 rounded-xl active:opacity-70"
            onPress={onClose}
          >
            <Ionicons name="log-out-outline" size={24} color="#ff4444" />
            <Text className="text-[#ff4444] text-base ml-3">Logout</Text>
          </Pressable>
        </View>
      </Animated.View>
    </>
  );
} 