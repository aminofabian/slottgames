import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import GameModal from './GameModal';

const games = [
  { 
    id: 1, 
    name: 'Fire Kirin', 
    price: '$0', 
    status: 'Active', 
    image: require('../assets/banner1.jpeg') 
  },
  { 
    id: 2, 
    name: 'Game Room', 
    price: '$0', 
    status: 'Active', 
    image: require('../assets/banner2.jpeg') 
  },
  { 
    id: 3, 
    name: 'Game Vault', 
    price: '$0', 
    status: 'Active', 
    image: require('../assets/banner3.jpeg') 
  },
  { 
    id: 4, 
    name: 'Juwa', 
    price: '$0', 
    status: 'Active', 
    image: require('../assets/banner1.jpeg') 
  },
  { 
    id: 5, 
    name: 'Cash Frenzy', 
    price: '$0', 
    status: 'Active', 
    image: require('../assets/banner2.jpeg') 
  },
  { 
    id: 6, 
    name: 'Cash Machine', 
    price: '$0', 
    status: 'Active', 
    image: require('../assets/banner3.jpeg') 
  },
  { 
    id: 7, 
    name: 'Mafia', 
    price: '$0', 
    status: 'Active', 
    image: require('../assets/banner1.jpeg') 
  },
  { 
    id: 8, 
    name: 'Milky Way', 
    price: '$0', 
    status: 'Active', 
    image: require('../assets/banner2.jpeg') 
  },
  { 
    id: 9, 
    name: 'Mr All In One', 
    price: '$0', 
    status: 'Active', 
    image: require('../assets/banner3.jpeg') 
  },
  { 
    id: 10, 
    name: 'Orion Stars', 
    price: '$0', 
    status: 'Active', 
    image: require('../assets/banner1.jpeg') 
  },
  { 
    id: 11, 
    name: 'Panda Master', 
    price: '$0', 
    status: 'Active', 
    image: require('../assets/banner2.jpeg') 
  },
  { 
    id: 12, 
    name: 'River Sweeps', 
    price: '$0', 
    status: 'Active', 
    image: require('../assets/banner3.jpeg') 
  },
  { 
    id: 13, 
    name: 'Ultra Panda', 
    price: '$0', 
    status: 'Active', 
    image: require('../assets/banner1.jpeg') 
  },
  { 
    id: 14, 
    name: 'VB Link', 
    price: '$0', 
    status: 'Active', 
    image: require('../assets/banner2.jpeg') 
  },
  { 
    id: 15, 
    name: 'Vegas Sweeps', 
    price: '$0', 
    status: 'Active', 
    image: require('../assets/banner3.jpeg') 
  }
];

export default function GameGrid() {
  const [selectedGame, setSelectedGame] = useState<typeof games[0] | null>(null);

  return (
    <View className="px-4 py-2">
      <View className="flex-row flex-wrap justify-between">
        {games.map((game) => (
          <Pressable
            key={game.id}
            className="w-[48%] mb-4 bg-black/20 rounded-xl overflow-hidden active:opacity-80"
            onPress={() => setSelectedGame(game)}
          >
            <Image
              source={game.image}
              className="w-full h-36 rounded-t-xl"
              resizeMode="cover"
            />
            <View className="p-3">
              <Text className="text-[#1cdbd6] font-medium">{game.name}</Text>
              <View className="flex-row justify-between items-center mt-1">
                <Text className="text-[#1cdbd6] text-sm">{game.price}</Text>
                <View className="flex-row items-center">
                  <View className="w-2 h-2 rounded-full bg-[#1cdbd6] mr-1" />
                  <Text className="text-[#1cdbd6]/80 text-xs">{game.status}</Text>
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </View>

      <GameModal 
        isVisible={!!selectedGame}
        onClose={() => setSelectedGame(null)}
        game={selectedGame!}
      />
    </View>
  );
} 