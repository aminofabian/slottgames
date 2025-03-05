import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeIn, FadeOut, SlideInDown, SlideOutDown } from 'react-native-reanimated';

type RegisterModalProps = {
  isVisible: boolean;
  onClose: () => void;
  onRegister: (username: string, email: string) => void;
  onSignInPress: () => void;
};

export default function RegisterModal({ isVisible, onClose, onRegister, onSignInPress }: RegisterModalProps) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    email: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { username: '', email: '' };

    // Username validation
    if (!username) {
      newErrors.username = 'Username is required';
      isValid = false;
    } else if (username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
      isValid = false;
    }

    // Email validation
    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleRegister = () => {
    if (validateForm()) {
      onRegister(username, email);
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
              <Text className="text-[#1cdbd6] text-2xl font-bold tracking-widest">CREATE ACCOUNT</Text>
            </View>

            <View className="space-y-4">
              <View>
                <View className="flex-row items-center mb-1">
                  <Ionicons name="person-outline" size={18} color="#1cdbd6" />
                  <Text className="text-[#1cdbd6] ml-2 text-base">CHOOSE USERNAME</Text>
                </View>
                <TextInput
                  className="w-full bg-[#001A14] border border-[#1cdbd6]/20 rounded-xl px-4 py-3 text-[#1cdbd6] text-base"
                  placeholder="Pick a unique username"
                  placeholderTextColor="#1cdbd660"
                  value={username}
                  onChangeText={setUsername}
                  autoCapitalize="none"
                />
                <Text className="text-[#1cdbd6]/60 text-xs mt-1">This will be your public display name</Text>
                {errors.username ? (
                  <Text className="text-red-500 mt-1 text-sm">{errors.username}</Text>
                ) : null}
              </View>

              <View>
                <View className="flex-row items-center mb-1">
                  <Ionicons name="mail-outline" size={18} color="#1cdbd6" />
                  <Text className="text-[#1cdbd6] ml-2 text-base">YOUR EMAIL ADDRESS</Text>
                </View>
                <TextInput
                  className="w-full bg-[#001A14] border border-[#1cdbd6]/20 rounded-xl px-4 py-3 text-[#1cdbd6] text-base"
                  placeholder="name@example.com"
                  placeholderTextColor="#1cdbd660"
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
                <Text className="text-[#1cdbd6]/60 text-xs mt-1">We'll send a verification code to this email</Text>
                {errors.email ? (
                  <Text className="text-red-500 mt-1 text-sm">{errors.email}</Text>
                ) : null}
              </View>
            </View>

            <Pressable 
              className="mt-8 bg-[#1cdbd6] py-4 rounded-xl items-center active:opacity-90 flex-row justify-center"
              onPress={handleRegister}
            >
              <Text className="text-[#002B22] font-semibold text-base mr-2">SIGN UP</Text>
              <Ionicons name="arrow-forward" size={20} color="#002B22" />
            </Pressable>

            <View className="mt-6 items-center">
              <Text className="text-[#1cdbd6]/40 text-sm">or</Text>
              <View className="mt-4 flex-row items-center">
                <Text className="text-[#1cdbd6]/60">Already have an account?</Text>
                <Pressable className="ml-2" onPress={onSignInPress}>
                  <Text className="text-[#1cdbd6] font-medium">Login to your account</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Animated.View>
      </View>
    </>
  );
} 