import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeIn, FadeOut, SlideInDown, SlideOutDown } from 'react-native-reanimated';

type SignInModalProps = {
  isVisible: boolean;
  onClose: () => void;
  onSignIn: (email: string, password: string) => void;
  onRegisterPress?: () => void;
};

export default function SignInModal({ isVisible, onClose, onSignIn, onRegisterPress }: SignInModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };

    // Email validation
    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSignIn = () => {
    if (validateForm()) {
      onSignIn(email, password);
    }
  };

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
          className="w-full max-w-md bg-[#002B22] rounded-3xl overflow-hidden shadow-xl shadow-black/50"
        >
          <View className="relative p-6">
            <Pressable 
              className="absolute right-4 top-4 z-10 w-8 h-8 bg-[#1cdbd6]/10 rounded-full items-center justify-center active:opacity-70"
              onPress={onClose}
            >
              <Ionicons name="close" size={20} color="#1cdbd6" />
            </Pressable>

            <View className="items-center mb-2">
              <Text className="text-[#1cdbd6] text-4xl font-bold tracking-wider">SLOT THING</Text>
              <Text className="text-[#1cdbd6]/60 text-sm tracking-wider">FORTUNE AWAITS</Text>
            </View>

            <View className="mb-8">
              <Text className="text-[#1cdbd6] text-2xl font-bold tracking-widest">WELCOME BACK</Text>
            </View>

            <View className="space-y-4">
              <View>
                <View className="flex-row items-center mb-1">
                  <Ionicons name="person-outline" size={18} color="#1cdbd6" />
                  <Text className="text-[#1cdbd6] ml-2 text-base">USERNAME OR EMAIL</Text>
                </View>
                <TextInput
                  className="w-full bg-[#001A14] border border-[#1cdbd6]/20 rounded-xl px-4 py-3 text-[#1cdbd6] text-base"
                  placeholder="Enter your username"
                  placeholderTextColor="#1cdbd660"
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                />
                {errors.email ? (
                  <Text className="text-red-500 mt-1 text-sm">{errors.email}</Text>
                ) : null}
              </View>

              <View>
                <View className="flex-row items-center mb-1">
                  <Ionicons name="lock-closed-outline" size={18} color="#1cdbd6" />
                  <Text className="text-[#1cdbd6] ml-2 text-base">PASSWORD</Text>
                </View>
                <TextInput
                  className="w-full bg-[#001A14] border border-[#1cdbd6]/20 rounded-xl px-4 py-3 text-[#1cdbd6] text-base"
                  placeholder="Enter your password"
                  placeholderTextColor="#1cdbd660"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
                {errors.password ? (
                  <Text className="text-red-500 mt-1 text-sm">{errors.password}</Text>
                ) : null}
              </View>
            </View>

            <Pressable 
              className="mt-8 bg-[#1cdbd6] py-4 rounded-xl items-center active:opacity-90"
              onPress={handleSignIn}
            >
              <Text className="text-[#002B22] font-semibold text-base">LOGIN</Text>
            </Pressable>

            <View className="mt-6 items-center">
              <Text className="text-[#1cdbd6]/40 text-sm">or</Text>
              <View className="mt-4 flex-row items-center">
                <Text className="text-[#1cdbd6]/60">Don't have an account?</Text>
                <Pressable className="ml-2" onPress={onRegisterPress}>
                  <Text className="text-[#1cdbd6] font-medium">Sign up</Text>
                </Pressable>
              </View>
            </View>

            <Pressable className="mt-4 items-center">
              <Text className="text-[#1cdbd6]/80">Forgot your password?</Text>
            </Pressable>
          </View>
        </Animated.View>
      </View>
    </>
  );
} 