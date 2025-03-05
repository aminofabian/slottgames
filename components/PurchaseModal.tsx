import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeIn, FadeOut, SlideInUp, SlideOutDown } from 'react-native-reanimated';

type PaymentMethod = {
  id: string;
  title: string;
  icon: React.ReactNode;
  limits?: string;
  bonus?: string;
};

type PurchaseModalProps = {
  isVisible: boolean;
  onClose: () => void;
  balance: number;
  onSelectPayment: (method: string) => void;
};

const paymentMethods: PaymentMethod[] = [
  {
    id: 'stripe',
    title: 'Stripe',
    icon: (
      <View className="flex-row">
        <Ionicons name="card" size={24} color="#1cdbd6" />
        <Text className="text-[#1cdbd6] ml-2">Apple Pay / G Pay</Text>
      </View>
    ),
    limits: 'Min.$10 - Max. $4000'
  },
  {
    id: 'bitcoin-lightning',
    title: 'Bitcoin Lightning',
    icon: (
      <View className="flex-row items-center">
        <Ionicons name="logo-bitcoin" size={24} color="#1cdbd6" />
        <Ionicons name="flash" size={20} color="#1cdbd6" className="ml-1" />
      </View>
    ),
    limits: 'Min.$5 - Max. $1000'
  },
  {
    id: 'bitcoin',
    title: 'Bitcoin',
    icon: <Ionicons name="logo-bitcoin" size={24} color="#1cdbd6" />,
    limits: 'Min.$20'
  },
  {
    id: 'litecoin',
    title: 'Litecoin',
    icon: <Ionicons name="logo-bitcoin" size={24} color="#1cdbd6" />,
    limits: 'Min.$10'
  },
  {
    id: 'cashapp',
    title: 'CASHAPP',
    icon: <Ionicons name="cash" size={24} color="#1cdbd6" />,
    limits: 'Min.$10 - Max. $4000',
    bonus: '+50% BONUS'
  }
];

export default function PurchaseModal({ isVisible, onClose, balance, onSelectPayment }: PurchaseModalProps) {
  if (!isVisible) return null;

  return (
    <>
      <Animated.View 
        entering={FadeIn.duration(200)}
        exiting={FadeOut.duration(200)}
        className="absolute inset-0 bg-black/70"
        onTouchStart={onClose}
      />
      <Animated.View
        entering={SlideInUp.springify().damping(15)}
        exiting={SlideOutDown.duration(200)}
        className="absolute inset-x-0 bottom-0 bg-[#002B22] rounded-t-3xl overflow-hidden"
      >
        <View className="p-6">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-white text-2xl font-bold">PURCHASE</Text>
            <Pressable 
              onPress={onClose}
              className="w-8 h-8 items-center justify-center"
            >
              <Ionicons name="close" size={24} color="#1cdbd6" />
            </Pressable>
          </View>

          {/* Balance */}
          <View className="mb-6">
            <Text className="text-[#1cdbd6]/60 text-base mb-1">Current balance:</Text>
            <Text className="text-[#1cdbd6] text-3xl font-bold">${balance}</Text>
          </View>

          {/* Payment Methods */}
          <View>
            <Text className="text-[#1cdbd6]/60 text-base mb-4">Choose your payment method:</Text>
            <Text className="text-[#1cdbd6]/40 text-sm mb-4">All purchases are processed automatically</Text>
            
            <View className="space-y-3">
              {paymentMethods.map((method) => (
                <Pressable
                  key={method.id}
                  className="flex-row items-center justify-between bg-black/20 p-4 rounded-xl active:opacity-80"
                  onPress={() => onSelectPayment(method.id)}
                >
                  <View className="flex-row items-center">
                    {method.icon}
                  </View>
                  <View className="flex-row items-center">
                    <Text className="text-[#1cdbd6]/60 text-sm">{method.limits}</Text>
                    {method.bonus && (
                      <View className="ml-3 px-2 py-1 bg-[#1cdbd6]/10 rounded-md">
                        <Text className="text-[#1cdbd6] text-xs font-medium">{method.bonus}</Text>
                      </View>
                    )}
                  </View>
                </Pressable>
              ))}
            </View>
          </View>

          {/* Bottom Buttons */}
          <View className="flex-row gap-3 mt-6">
            <Pressable 
              className="flex-1 border border-[#1cdbd6]/20 py-4 rounded-xl items-center active:opacity-80"
              onPress={onClose}
            >
              <Text className="text-[#1cdbd6] font-medium">Cancel</Text>
            </Pressable>
            <Pressable 
              className="flex-1 bg-[#1cdbd6] py-4 rounded-xl items-center active:opacity-90"
              onPress={() => {}}
            >
              <Text className="text-[#002B22] font-semibold">Next</Text>
            </Pressable>
          </View>
        </View>
      </Animated.View>
    </>
  );
} 