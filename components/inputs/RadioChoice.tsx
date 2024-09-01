import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

interface RadioChoiceProps {
  titles: string[];
  // other props...
}

const RadioChoice = ({ titles }: RadioChoiceProps) => {
  const [selectedItem, setSelectedItem] = useState(titles[Math.floor(titles.length / 2)]);

  const renderItems = ({ item }: { item: string }) => {
    return (
      <TouchableOpacity
        className={`${
          selectedItem === item ? 'border-[#FF5069] border-2' : ''
        } flex flex-row items-center justify-between my-4 w-4/5 mx-auto rounded-full p-4 bg-white`}
        onPress={() => setSelectedItem(item)}
      >
        <Text className="text-base font-normal">{item}</Text>
        <View
          className={`${
            selectedItem === item ? 'border-[#ffedef] border bg-[#f17083]' : 'border-black border'
          } w-6 h-6 rounded-full`}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View className="mt-7">
      <FlatList data={titles} renderItem={renderItems} keyExtractor={(item, index) => index.toString()} />
    </View>
  );
};

export default RadioChoice;
