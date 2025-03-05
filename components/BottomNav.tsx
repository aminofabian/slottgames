import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { 
  useAnimatedStyle, 
  withSpring, 
  useSharedValue,
  withSequence,
  withDelay,
  FadeInDown
} from 'react-native-reanimated';
import MoreDrawer from './MoreDrawer';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const navItems = [
  { id: 1, icon: 'camera-outline' as const, label: 'Purchase' },
  { id: 2, icon: 'cash-outline' as const, label: 'Cashout' },
  { id: 3, icon: 'home' as const, label: '', isMain: true },
  { id: 4, icon: 'headset-outline' as const, label: 'Support' },
  { id: 5, icon: 'ellipsis-horizontal' as const, label: 'More' },
];

function NavItem({ item, index, onPress }: { 
  item: typeof navItems[0], 
  index: number,
  onPress?: () => void 
}) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }]
  }));

  const onPressIn = () => {
    scale.value = withSpring(0.9);
  };

  const onPressOut = () => {
    scale.value = withSpring(1);
  };

  return (
    <Animated.View
      entering={FadeInDown.delay(index * 100)}
      className={`items-center ${item.isMain ? '-mt-8' : ''}`}
    >
      <Pressable
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={onPress}
      >
        <Animated.View style={animatedStyle}>
          {item.isMain ? (
            <View className="w-16 h-16 rounded-full bg-[#1cdbd6] items-center justify-center shadow-lg shadow-cyan-500/50">
              <Ionicons name={item.icon} size={32} color="#20151a" />
            </View>
          ) : (
            <View className="items-center">
              <Ionicons name={item.icon} size={24} color="#1cdbd6" />
              <Text className="text-[#1cdbd6] text-xs mt-1">{item.label}</Text>
            </View>
          )}
        </Animated.View>
      </Pressable>
    </Animated.View>
  );
}

export default function BottomNav() {
  const [isMoreVisible, setIsMoreVisible] = useState(false);

  return (
    <>
      <Animated.View 
        className="bg-[#20151a] border-t border-[#333333]/30 pb-6 pt-2 px-2"
        entering={FadeInDown}
      >
        <View className="flex-row justify-between items-center">
          {navItems.map((item, index) => (
            <NavItem 
              key={item.id} 
              item={item} 
              index={index}
              onPress={item.icon === 'ellipsis-horizontal' ? 
                () => setIsMoreVisible(true) : undefined}
            />
          ))}
        </View>
      </Animated.View>
      <MoreDrawer 
        isVisible={isMoreVisible} 
        onClose={() => setIsMoreVisible(false)} 
      />
    </>
  );
} 