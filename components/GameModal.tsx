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
        entering={FadeIn.duration(200)}
        exiting={FadeOut.duration(200)}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onTouchStart={onClose}
      />
      <View className="absolute inset-0 items-center justify-center px-4">
        <Animated.View
          entering={SlideInDown.springify().damping(15)}
          exiting={SlideOutDown.duration(200)}
          className="w-full bg-[#20151a] rounded-3xl overflow-hidden shadow-xl shadow-black/50"
        >
          <View className="relative">
            <Pressable 
              className="absolute right-4 top-4 z-10 w-8 h-8 bg-black/40 rounded-full items-center justify-center active:opacity-70"
              onPress={onClose}
            >
              <Ionicons name="close" size={20} color="#fff" />
            </Pressable>
            
            <Image 
              source={game.image} 
              className="w-full h-32 rounded-t-3xl"
              resizeMode="cover"
            />
            
            <View className="p-6">
              <View className="flex-row items-center justify-between mb-6">
                <View>
                  <Text className="text-[#1cdbd6] text-2xl font-semibold">{game.name}</Text>
                  <Text className="text-[#1cdbd6]/60 mt-1 text-base">Balance: $0</Text>
                </View>
              </View>

              <View className="space-y-4">
                <View className="flex-row justify-between items-center bg-[#1cdbd6]/5 p-4 rounded-xl">
                  <Text className="text-[#1cdbd6]/80 text-base">Username:</Text>
                  <Text className="text-[#1cdbd6] font-medium">user_{game.name.toLowerCase()}</Text>
                </View>
                
                <View className="flex-row justify-between items-center bg-[#1cdbd6]/5 p-4 rounded-xl">
                  <Text className="text-[#1cdbd6]/80 text-base">Password:</Text>
                  <View className="flex-row items-center">
                    <Text className="text-[#1cdbd6] font-medium">********</Text>
                    <Pressable className="ml-3 w-8 h-8 bg-[#1cdbd6]/10 rounded-full items-center justify-center active:opacity-70">
                      <Ionicons name="copy-outline" size={18} color="#1cdbd6" />
                    </Pressable>
                  </View>
                </View>
              </View>

              <View className="flex-row gap-3 mt-8">
                <Pressable className="flex-1 bg-[#8B5CF6] py-4 rounded-xl items-center active:opacity-90">
                  <Text className="text-white font-medium text-base">Recharge</Text>
                </Pressable>
                <Pressable className="flex-1 bg-[#F97316] py-4 rounded-xl items-center active:opacity-90">
                  <Text className="text-white font-medium text-base">Redeem</Text>
                </Pressable>
              </View>

              <Pressable className="mt-3 border border-[#1cdbd6]/20 bg-[#1cdbd6]/5 py-4 rounded-xl items-center active:opacity-90">
                <Text className="text-[#1cdbd6] font-medium text-base">Reset</Text>
              </Pressable>

              <Pressable className="mt-3 bg-[#1cdbd6] py-4 rounded-xl items-center active:opacity-90">
                <Text className="text-[#20151a] font-semibold text-base">Play Now</Text>
              </Pressable>
            </View>
          </View>
        </Animated.View>
      </View>
    </>
  );
} 