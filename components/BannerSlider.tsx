import React, { useEffect, useRef } from 'react';
import { View, Dimensions, Image } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const BANNER_HEIGHT = 200;
const BANNER_WIDTH = SCREEN_WIDTH - 32; // Accounting for padding

const banners = [
  { id: 1, image: require('../assets/banner1.jpeg') },
  { id: 2, image: require('../assets/banner2.jpeg') },
  { id: 3, image: require('../assets/banner3.jpeg') },
];

type DotProps = {
  index: number;
  scrollX: Animated.SharedValue<number>;
};

export default function BannerSlider() {
  const scrollX = useSharedValue(0);
  const scrollViewRef = useRef<Animated.ScrollView>(null);
  const currentIndex = useSharedValue(0);

  const scrollToNextImage = () => {
    const nextIndex = (currentIndex.value + 1) % banners.length;
    scrollViewRef.current?.scrollTo({
      x: nextIndex * SCREEN_WIDTH,
      animated: true,
    });
    currentIndex.value = nextIndex;
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
      currentIndex.value = Math.round(event.contentOffset.x / SCREEN_WIDTH);
    },
    onMomentumEnd: () => {
      runOnJS(startAutoPlay)();
    },
  });

  const startAutoPlay = () => {
    timer.current = setTimeout(scrollToNextImage, 3000);
  };

  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return (
    <View className="py-4">
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        className="w-full"
        onScrollBeginDrag={() => {
          if (timer.current) clearTimeout(timer.current);
        }}
        decelerationRate="fast"
        snapToInterval={SCREEN_WIDTH}
      >
        {banners.map((banner, index) => (
          <View
            key={banner.id}
            className="px-4"
            style={{ width: SCREEN_WIDTH }}
          >
            <View className="overflow-hidden rounded-2xl shadow-lg shadow-black/50">
              <Image
                source={banner.image}
                style={{
                  width: BANNER_WIDTH,
                  height: BANNER_HEIGHT,
                }}
                resizeMode="cover"
              />
              <View className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />
            </View>
          </View>
        ))}
      </Animated.ScrollView>

      {/* Pagination dots */}
      <View className="flex-row justify-center space-x-2 mt-4">
        {banners.map((_, index) => (
          <Dot key={index} index={index} scrollX={scrollX} />
        ))}
      </View>
    </View>
  );
}

function Dot({ index, scrollX }: DotProps) {
  const animatedStyle = useAnimatedStyle(() => {
    const isActive = Math.round(scrollX.value / SCREEN_WIDTH) === index;
    return {
      backgroundColor: withTiming(isActive ? '#1cdbd6' : '#333333', { duration: 300 }),
      width: withSpring(isActive ? 24 : 8),
      opacity: withTiming(isActive ? 1 : 0.5, { duration: 300 }),
    };
  });

  return (
    <Animated.View
      style={[animatedStyle]}
      className="h-2 rounded-full"
    />
  );
} 