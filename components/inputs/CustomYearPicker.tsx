import { Modal, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useRef } from 'react';
import { FlatList } from 'react-native-gesture-handler';

const CustomYearPicker = () => {
  const [activeYear, setActiveYear] = useState(null);
  const endYear = new Date().getFullYear() - 18;
  const years = Array.from({ length: endYear - 1972 + 1 }, (_, i) => 1972 + i);

  const onViewRef = useRef((viewableItems) => {
    if (viewableItems.viewableItems.length > 0) {
      setActiveYear(viewableItems.viewableItems[0].item);
    }
  });

  const renderItem = ({ item }) => (
    <TouchableOpacity
      className={`bg-${item == activeYear ? 'white transform scale-125' : 'slate-100'} p-2 m-2 rounded-4xl`}
      onPress={() => setActiveYear(item)}
    >
      <Text
        className={`text-center ${item == activeYear ? 'font-bold text-3xl text-[#FF5069]' : 'font-medium text-xl'}`}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View className='flex mt-6 mx-auto w-1/3 h-2/3'>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={years}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        extraData={activeYear} // Ensure FlatList re-renders when activeYear changes
        onViewableItemsChanged={onViewRef.current} // Callback when viewable items change
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50 // Consider an item as viewable if at least 50% is visible
        }}
      />
    </View>
  );
};

export default CustomYearPicker;
