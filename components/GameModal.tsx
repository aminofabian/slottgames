import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeIn, FadeOut, SlideInDown, SlideOutDown } from 'react-native-reanimated';

type GameModalProps = {
  isVisible: boolean;
  onClose: () => void;
  game: {
    name: string;
    image: any;
  };
};

export default function GameModal({ isVisible, onClose, game }: GameModalProps) {
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
        className="absolute inset-x-4 top-[20%] bg-[#20151a] rounded-3xl overflow-hidden"
      >
        <View className="relative">
          <Pressable 
            className="absolute right-4 top-4 z-10 w-8 h-8 bg-black/20 rounded-full items-center justify-center"
            onPress={onClose}
          >
            <Ionicons name="close" size={20} color="#fff" />
          </Pressable>
          
          <Image 
            source={game.image} 
            className="w-full h-24 rounded-t-3xl"
            resizeMode="cover"
          />
          
          <View className="p-6">
            <View className="flex-row items-center justify-between mb-4">
              <View>
                <Text className="text-[#1cdbd6] text-xl font-medium">{game.name}</Text>
                <Text className="text-[#1cdbd6]/60 mt-1">Balance: $0</Text>
              </View>
            </View>

            <View className="space-y-3">
              <View className="flex-row justify-between items-center">
                <Text className="text-[#1cdbd6]/80">Username:</Text>
                <Text className="text-[#1cdbd6]">user_{game.name.toLowerCase()}</Text>
              </View>
              
              <View className="flex-row justify-between items-center">
                <Text className="text-[#1cdbd6]/80">Password:</Text>
                <View className="flex-row items-center">
                  <Text className="text-[#1cdbd6]">********</Text>
                  <Pressable className="ml-2">
                    <Ionicons name="copy-outline" size={18} color="#1cdbd6" />
                  </Pressable>
                </View>
              </View>
            </View>

            <View className="flex-row gap-3 mt-6">
              <Pressable className="flex-1 bg-[#8B5CF6] py-4 rounded-xl items-center">
                <Text className="text-white font-medium">Recharge</Text>
              </Pressable>
              <Pressable className="flex-1 bg-[#F97316] py-4 rounded-xl items-center">
                <Text className="text-white font-medium">Redeem</Text>
              </Pressable>
            </View>

            <Pressable className="mt-3 border border-[#1cdbd6]/20 bg-[#1cdbd6]/5 py-4 rounded-xl items-center">
              <Text className="text-[#1cdbd6] font-medium">Reset</Text>
            </Pressable>

            <Pressable className="mt-3 bg-[#1cdbd6] py-4 rounded-xl items-center">
              <Text className="text-[#20151a] font-medium">Play Now</Text>
            </Pressable>
          </View>
        </View>
      </Animated.View>
    </>
  );
} 